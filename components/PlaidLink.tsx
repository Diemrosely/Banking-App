import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();

  const [token, setToken] = useState('');

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);

      setToken(data?.linkToken);
    }

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    await exchangePublicToken({
      publicToken: public_token,
      user,
    })

    router.push('/');
  }, [user])
  
  const config: PlaidLinkOptions = {
    token,
    onSuccess
  }

  const { open, ready } = usePlaidLink(config);
  const isActive = false;
  const linkStyles = cn(
    'sidebar-link brightness-0 invert transition-all duration-300 relative flex items-center gap-2 px-4 py-2 rounded-md', 
    {
      'bg-bank-gradient': isActive, // Apply the active state styling
    }
  );
  
  return (
    <>
      {variant === 'primary' ? (
        <div
          className={linkStyles}
          style={{
            boxShadow: isActive ? '' : 'none',
            transition: 'all 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(80, 200, 120, 0.75), 0 0 30px rgba(80, 200, 120, 0.75)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}

          onClick={() => ready && open()}  // Ensure the button opens Plaid only if ready
        >
          <div className="relative size-6">
            <Image
              src="/icons/connect-bank.svg"
              alt="Connect Bank"
              width={24}
              height={24}
              className="brightness-0 invert transition-all duration-300"
            />
          </div>
          <p className="hidden xl:block text-[16px] font-semibold brightness-0 invert">
            Connect Bank
          </p>
        </div>
      ) : variant === 'ghost' ? (
        <div
        className={linkStyles}
        style={{
          boxShadow: isActive ? '' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(80, 200, 120, 0.75), 0 0 30px rgba(80, 200, 120, 0.75)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }}
        onClick={() => ready && open()} // Open Plaid Link only if ready
      >
          <div className="relative size-6">
            <Image
              src="/icons/connect-bank.svg"
              alt="Connect Bank"
              width={24}
              height={24}
              className="brightness-0 invert transition-all duration-300"
            />
          </div>
          <p className="hidden xl:block text-[16px] font-semibold brightness-0 invert">
            Connect Bank
          </p>
        </div>
      ) : (
        <div
        className={linkStyles}
        style={{
          boxShadow: isActive ? '' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(80, 200, 120, 0.75), 0 0 30px rgba(80, 200, 120, 0.75)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }}
        onClick={() => ready && open()} // Open Plaid Link only if ready
      >
          <div className="relative size-6">
            <Image
              src="/icons/connect-bank.svg"
              alt="Connect Bank"
              width={24}
              height={24}
              className="brightness-0 invert transition-all duration-300"
            />
          </div>
          <p className="hidden xl:block text-[16px] font-semibold brightness-0 invert">
            Connect Bank
          </p>
        </div>
      )}
    </>
  );
};

export default PlaidLink