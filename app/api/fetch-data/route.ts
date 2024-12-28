// app/api/fetch-data/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { locationCode, type, slug, packageCode, iccid } = await req.json();

    const response = await fetch('https://api.esimaccess.com/api/v1/open/package/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'RT-AccessCode': process.env.RT_ACCESS_CODE || '', 
      },
      body: JSON.stringify({ locationCode, type, slug, packageCode, iccid }),
    });

    const result = await response.json();

    if (response.ok) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { success: false, errorMsg: result.errorMsg || 'An error occurred' },
        { status: response.status }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, errorMsg: error.message },
      { status: 500 }
    );
  }
}
