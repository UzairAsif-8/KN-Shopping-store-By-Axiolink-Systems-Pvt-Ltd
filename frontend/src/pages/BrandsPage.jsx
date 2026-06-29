import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import LazyImage from '../components/ui/LazyImage';
import { BRANDS, IMAGES } from '../constants';

const BrandsPage = () => (
  <div>
    <PageHero
      image={IMAGES.hero.brands}
      eyebrow="Partners"
      title="Our Brands"
      subtitle="We partner with the world's finest beauty houses to bring you exceptional products."
    />
    <section className="container-kn py-16 md:py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {BRANDS.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={brand.href} className="group block">
              <LazyImage
                src={brand.image}
                alt={brand.name}
                className="rounded-lg group-hover:scale-[1.02] transition-transform duration-700"
                aspectRatio="aspect-[4/3]"
              />
              <div className="mt-4 space-y-1">
                <h3 className="font-heading text-2xl group-hover:text-accent transition-colors">{brand.name}</h3>
                <p className="text-sm text-text-muted">{brand.tagline}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default memo(BrandsPage);
