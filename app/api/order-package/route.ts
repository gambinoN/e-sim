// app/api/order-package/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { transactionId, amount, packageInfoList } = await req.json();

    // Ensure RT_ACCESS_CODE exists in environment variables
    const accessCode = process.env.RT_ACCESS_CODE;
    if (!accessCode) {
      return NextResponse.json(
        { success: false, errorMsg: 'RT_ACCESS_CODE is not defined in environment variables.' },
        { status: 500 }
      );
    }

    // Make the external API request
    const response = await fetch('https://api.esimaccess.com/api/v1/open/esim/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'RT-AccessCode': accessCode,
      },
      body: JSON.stringify({ transactionId, amount, packageInfoList }),
    });

    const result = await response.json();

    if (response.ok) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { success: false, errorMsg: result.errorMsg || 'An error occurred during the order request' },
        { status: response.status }
      );
    }
  } catch (error: unknown) {
    // Make sure error is an instance of Error before accessing message
    const errorMsg = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { success: false, errorMsg },
      { status: 500 }
    );
  }
}