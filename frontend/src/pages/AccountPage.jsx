import { memo } from 'react';
import PageHero from '../components/common/PageHero';
import Logo from '../components/common/Logo';
import Button from '../components/ui/Button';
import { IMAGES } from '../constants';

const AccountPage = () => (
  <div>
    <PageHero
      image={IMAGES.placeholders.account}
      eyebrow="Your Account"
      title="My Profile"
    />
    <section className="container-kn py-16 md:py-24">
      <div className="max-w-md mx-auto space-y-8">
        <Logo variant="auth" />
        <p className="body-lg text-text-muted text-center">
          Sign in to manage your orders, saved addresses, and beauty preferences.
        </p>
        <div className="space-y-4">
          <input type="email" placeholder="Email address" className="w-full px-4 py-3.5 bg-supporting border border-outline/30 rounded-sm outline-none focus:border-primary transition-colors" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3.5 bg-supporting border border-outline/30 rounded-sm outline-none focus:border-primary transition-colors" />
          <Button variant="primary" className="w-full">Sign In</Button>
        </div>
      </div>
    </section>
  </div>
);

export default memo(AccountPage);
