import { NextResponse } from 'next/server';
import restaurantConfig from '@/config/restaurant-config.json';

/**
 * API Route to fetch restaurant configuration
 * GET /api/config
 *
 * In production, this would fetch from a database or external CMS
 * For now, it returns the JSON file
 */
export async function GET() {
  try {
    // TODO: Replace with actual database/CMS fetch
    // Example:
    // const config = await prisma.restaurantConfig.findFirst();
    // or
    // const config = await fetch('https://cms.example.com/api/restaurant-config');

    return NextResponse.json(restaurantConfig);
  } catch (error) {
    console.error('Error fetching restaurant config:', error);
    return NextResponse.json({ error: 'Failed to fetch configuration' }, { status: 500 });
  }
}

/**
 * API Route to update restaurant configuration
 * PUT /api/config
 *
 * This would be protected and only accessible to admins
 */
export async function PUT(request: Request) {
  try {
    const body = await request.json();

    // TODO: Add authentication/authorization
    // TODO: Validate the configuration against schema
    // TODO: Save to database/CMS
    // Example:
    // await prisma.restaurantConfig.update({
    //   where: { id: 1 },
    //   data: body
    // });

    return NextResponse.json({ success: true, config: body });
  } catch (error) {
    console.error('Error updating restaurant config:', error);
    return NextResponse.json({ error: 'Failed to update configuration' }, { status: 500 });
  }
}
