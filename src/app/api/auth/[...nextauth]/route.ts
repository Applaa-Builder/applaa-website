// NextAuth configuration - Coming Soon!
// This will be implemented when authentication features are added

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: "Authentication coming soon! 🚀",
    status: "under_development" 
  });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ 
    message: "Authentication coming soon! 🚀",
    status: "under_development" 
  });
}