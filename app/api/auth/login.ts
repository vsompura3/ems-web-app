import {NextResponse} from 'next/server'

export async function GET(request: Request) {
  const res = await getUserData('2017-1-60-0001', '123456')
  return NextResponse.json(res)
}

export const getUserData = async (
  registrationNumber: string,
  password: string,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_EMS_BASE_URL}/api/v1/user/login`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({reg_no: registrationNumber, password: password}),
    },
  )
  const data = await res.json()
  return data
}
