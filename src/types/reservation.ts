export interface ReservationInput {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
}

export interface Reservation extends ReservationInput {
  id: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface CreateReservationResponse {
  createReservation: Reservation;
}

export interface CreateReservationVariables {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
}
