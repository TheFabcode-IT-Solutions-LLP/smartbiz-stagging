/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import { ApiKeySession, ProfilesApi, ProfileCreateQuery, ProfileEnum } from 'klaviyo-api';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    const apiKey = process.env.KLAVIYO_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ message: 'Missing Klaviyo API key in environment' }, { status: 500 });
    }

    const session = new ApiKeySession(apiKey);
    const profilesApi = new ProfilesApi(session);

    const profile: ProfileCreateQuery = {
      data: {
        type: ProfileEnum.Profile,
        attributes: {
          email,
        },
      },
    };

    const result = await profilesApi.createProfile(profile);

    return NextResponse.json(
      { message: 'Subscribed successfully', profile: result.body, email },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Klaviyo API error:', error);

    if (error.status === 409) {
    
      return NextResponse.json({ message: 'Email is already subscribed.' }, { status: 409 });
    }

    return NextResponse.json(
      { message: 'Failed to subscribe', error: error.message || error.toString() },
      { status: 500 }
    );
  }
}
