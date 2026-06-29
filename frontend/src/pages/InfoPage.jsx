import { memo } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import LazyImage from '../components/ui/LazyImage';
import Button from '../components/ui/Button';
import { IMAGES, getProductImages } from '../constants';

const INFO_PAGES = {
  'ritual-guide': {
    title: 'Ritual Guide',
    eyebrow: 'Your Guide',
    image: IMAGES.placeholders.ritualGuide,
    body: 'Build a beauty ritual that honors your skin. Morning: cleanse, tone, treat, moisturize, protect. Evening: double cleanse, treat, nourish.',
    sideImage: IMAGES.editorial.routine,
  },
  sustainability: {
    title: 'Sustainability',
    eyebrow: 'Our Commitment',
    image: IMAGES.placeholders.sustainability,
    body: 'We partner with brands committed to responsible sourcing, recyclable packaging, and cruelty-free formulations.',
    sideImage: IMAGES.editorial.sustainability,
  },
  shipping: {
    title: 'Shipping',
    eyebrow: 'Delivery',
    image: IMAGES.placeholders.shipping,
    body: 'Complimentary shipping on orders over $75. Standard delivery 3–5 business days. Express options available at checkout.',
    sideImage: IMAGES.editorial.shipping,
  },
  returns: {
    title: 'Returns',
    eyebrow: 'Hassle-Free',
    image: IMAGES.placeholders.returns,
    body: 'Unopened products may be returned within 30 days. We provide prepaid return labels for your convenience.',
    sideImage: getProductImages('hydra-rich-moisturizer').main,
  },
  faq: {
    title: 'FAQ',
    eyebrow: 'Help Center',
    image: IMAGES.placeholders.faq,
    body: 'Find answers about orders, products, ingredients, and account management. Still need help? Contact our team.',
    sideImage: IMAGES.editorial.ingredients,
  },
};

const InfoPage = ({ pageKey }) => {
  const page = INFO_PAGES[pageKey];
  if (!page) return null;

  return (
    <div>
      <PageHero image={page.image} eyebrow={page.eyebrow} title={page.title} />
      <section className="container-kn py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <LazyImage src={page.sideImage} alt={page.title} className="rounded-lg" aspectRatio="aspect-[4/3]" />
          <div className="space-y-6">
            <p className="body-lg text-text-muted">{page.body}</p>
            <Button variant="outline" as={Link} to="/contact">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(InfoPage);
