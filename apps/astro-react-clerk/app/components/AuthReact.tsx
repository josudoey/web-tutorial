import React from "react";
import { SignInButton, SignOutButton, UserButton, useAuth } from "@clerk/astro/react";

export default function AuthReact() {
  const { isLoaded, isSignedIn, userId } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      <h2>React Frontend Component</h2>
      
      {!isSignedIn ? (
        <div style={{ marginTop: '16px' }}>
          <p>You are currently signed out.</p>
          <SignInButton mode="modal">
            <button style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#6366f1', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
              Sign In (Login)
            </button>
          </SignInButton>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <UserButton />
            <p style={{ margin: 0 }}>Welcome, <strong>{userId}</strong>!</p>
          </div>
          <p>You are currently signed in.</p>
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <SignOutButton>
              <button style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
                Sign Out (Logout)
              </button>
            </SignOutButton>

            <button 
              onClick={async () => {
                try {
                  const res = await fetch('/api/protected');
                  const data = await res.json();
                  alert(JSON.stringify(data, null, 2));
                } catch (err) {
                  alert('Error fetching backend: ' + err);
                }
              }}
              style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}
            >
              Test Protected API
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
