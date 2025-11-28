'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@apollo/client/react';
import { format } from 'date-fns';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { CREATE_RESERVATION } from '@/lib/graphql/mutations';
import { CreateReservationVariables, CreateReservationResponse } from '@/types/reservation';

const reservationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, 'Invalid phone number'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  partySize: z.number().min(1, 'Party size must be at least 1').max(20, 'Maximum 20 guests'),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

interface ReservationFormProps {
  onSuccess?: () => void;
}

const TIME_SLOTS = [
  { value: '17:00', label: '5:00 PM' },
  { value: '17:30', label: '5:30 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '18:30', label: '6:30 PM' },
  { value: '19:00', label: '7:00 PM' },
  { value: '19:30', label: '7:30 PM' },
  { value: '20:00', label: '8:00 PM' },
  { value: '20:30', label: '8:30 PM' },
  { value: '21:00', label: '9:00 PM' },
  { value: '21:30', label: '9:30 PM' },
];

const PARTY_SIZES = Array.from({ length: 20 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1} ${i === 0 ? 'Guest' : 'Guests'}`,
}));

export function ReservationForm({ onSuccess }: ReservationFormProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [createReservation, { loading }] = useMutation<
    CreateReservationResponse,
    CreateReservationVariables
  >(CREATE_RESERVATION);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      partySize: 2,
    },
  });

  const onSubmit = async (data: ReservationFormData) => {
    try {
      setSubmitStatus('idle');

      await createReservation({
        variables: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          date: data.date,
          time: data.time,
          partySize: data.partySize,
          specialRequests: data.specialRequests || undefined,
        },
      });

      setSubmitStatus('success');
      reset();

      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (error) {
      console.error('Reservation error:', error);
      setSubmitStatus('error');
    }
  };

  const minDate = format(new Date(), 'yyyy-MM-dd');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name & Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          {...register('name')}
          label="Full Name"
          placeholder="John Doe"
          error={errors.name?.message}
          disabled={loading}
        />
        <Input
          {...register('email')}
          type="email"
          label="Email"
          placeholder="john@example.com"
          error={errors.email?.message}
          disabled={loading}
        />
      </div>

      {/* Phone */}
      <Input
        {...register('phone')}
        type="tel"
        label="Phone Number"
        placeholder="+1 (555) 123-4567"
        error={errors.phone?.message}
        disabled={loading}
      />

      {/* Date, Time, Party Size */}
      <div className="grid gap-5 sm:grid-cols-3">
        <Input
          {...register('date')}
          type="date"
          label="Date"
          min={minDate}
          error={errors.date?.message}
          disabled={loading}
        />
        <Select
          {...register('time')}
          label="Time"
          options={TIME_SLOTS}
          error={errors.time?.message}
          disabled={loading}
        />
        <Select
          {...register('partySize', { valueAsNumber: true })}
          label="Party Size"
          options={PARTY_SIZES}
          error={errors.partySize?.message}
          disabled={loading}
        />
      </div>

      {/* Special Requests */}
      <TextArea
        {...register('specialRequests')}
        label="Special Requests (Optional)"
        placeholder="Dietary restrictions, celebrations, accessibility needs, etc."
        error={errors.specialRequests?.message}
        disabled={loading}
      />

      {/* Submit Button */}
      <Button type="submit" isLoading={loading} className="w-full" size="lg">
        {loading ? 'Submitting...' : 'Reserve Table'}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
          Reservation submitted successfully! We'll send you a confirmation email shortly.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
          Failed to submit reservation. Please try again or call us directly.
        </div>
      )}
    </form>
  );
}
