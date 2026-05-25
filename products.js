/**
 * HMCG — Product Catalog Data
 * Single source of truth for all products across index.html and catalog.html.
 *
 * To add a new product:
 *   1. Add an entry below with all required fields.
 *   2. Drop the image files into HMCG-Designs/ and commit.
 *   3. That's it — catalog.html renders automatically.
 *      For index.html editorial sections, add a card manually.
 *
 * Product fields:
 *   images   — Array of image paths (index 0 = card thumbnail + modal first image)
 *   type     — 'tee' | 'hoodie' | 'hat'
 *   material — Display string shown in modal and card subtitle
 *   price    — Display string e.g. '$45'
 *   bg       — Card/modal background color
 *   fit      — 'contain' (flat design on white/dark bg) | 'cover' (full-bleed photo)
 *   scale    — (optional) thumbnail scale % for contain-fit cards, default 70
 *   isNew    — (optional) show "New" badge on card
 *   sizes    — (optional) override size buttons — used for hats and any non-standard sizing
 *              e.g. ['S/M', 'L/XL'] or ['One Size']
 */

const D = 'HMCG-Designs/';

const products = {

  /* ── TEES — Comfort Colors 1717 (Unisex) ─────────────────────────────── */

  'Misfits Cheerleader': {
    images: [D+'misfits-cheerleader.png', D+'misfits-cheerleader2.png'],
    type: 'tee',
    material: 'Comfort Colors 1717 · Black',
    price: '$45', bg: '#0a0a0a', fit: 'contain', isNew: true
  },
  'Four Bars': {
    images: [D+'black-flag-bars.png', D+'black-flag-bars3.png'],
    type: 'tee',
    material: 'Comfort Colors 1717 · Black',
    price: '$45', bg: '#0a0a0a', fit: 'contain', isNew: true
  },
  'The Iron Maidens': {
    images: [D+'iron-maidens.png', D+'iron-maidens2.png', D+'iron-maidens4.png'],
    type: 'tee',
    material: 'Comfort Colors 1717 · Black',
    price: '$45', bg: '#0a0a0a', fit: 'contain', isNew: true
  },
  'Heavy Badge': {
    images: [D+'harley-badge.png', D+'harley-badge2.png'],
    type: 'tee',
    material: 'Comfort Colors 1717 · Black',
    price: '$45', bg: '#0a0a0a', fit: 'contain', isNew: true
  },
  'Winged Skull': {
    images: [D+'winged-skull.png', D+'winged-skull2.png'],
    type: 'tee',
    material: 'Comfort Colors 1717 · Bone',
    price: '$45', bg: '#f5f0e8', fit: 'contain', scale: 85, isNew: true
  },

  /* ── HOODIES — Comfort Colors 1567 (Unisex) ──────────────────────────── */

  'Misfits Cheerleader Hoodie': {
    images: [D+'misfits-cheerleader-hoodie.png', D+'misfits-cheerleader-hoodie2.png',
             D+'misfits-cheerleader-hoodie4.png',
             D+'misfits-cheerleader-hoodie5.png', D+'misfits-cheerleader-hoodie6.png'],
    type: 'hoodie',
    material: 'Comfort Colors 1567 · Black',
    price: '$115', bg: '#0a0a0a', fit: 'cover', isNew: true
  },
  'Four Bars Hoodie': {
    images: [D+'black-flag-bars-hoodie.png', D+'black-flag-bars-hoodie2.png',
             D+'black-flag-bars-hoodie4.png', D+'black-flag-bars-hoodie5.png',
             D+'HMCG-brand-wide-lifestyle-hoodie-shot.png'],
    type: 'hoodie',
    material: 'Comfort Colors 1567 · Black',
    price: '$115', bg: '#0a0a0a', fit: 'cover', isNew: true
  },
  'The Iron Maidens Hoodie': {
    images: [D+'iron-maidens-hoodie.png', D+'iron-maidens-hoodie2.png',
             D+'iron-maidens-hoodie3.png', D+'iron-maidens-hoodie4.png',
             D+'HMCG-brand-wide-lifestyle-hoodie-shot2.png'],
    type: 'hoodie',
    material: 'Comfort Colors 1567 · Black',
    price: '$115', bg: '#0a0a0a', fit: 'cover', isNew: true
  },
  'Heavy Badge Hoodie': {
    images: [D+'harley-badge-hoodie.png', D+'harley-badge-hoodie2.png',
             D+'harley-badge-hoodie3.png', D+'harley-badge-hoodie4.png'],
    type: 'hoodie',
    material: 'Comfort Colors 1567 · Black',
    price: '$115', bg: '#0a0a0a', fit: 'cover', isNew: true
  },
  'Winged Skull Hoodie': {
    images: [D+'winged-skull-hoodie.png', D+'winged-skull-hoodie2.png'],
    type: 'hoodie',
    material: 'Comfort Colors 1567 · Bone',
    price: '$115', bg: '#f5f0e8', fit: 'cover', isNew: true
  },

  /* ── HATS — add when ready ────────────────────────────────────────────── */
  /*
  'Four Bars Trucker': {
    images: [D+'four-bars-trucker.png', D+'four-bars-trucker2.png'],
    type: 'hat',
    sizes: ['S/M', 'L/XL'],
    material: 'Richardson 112 · Black',
    price: '$38', bg: '#0a0a0a', fit: 'contain', scale: 80, isNew: true
  },
  'Heavy Badge Trucker': {
    images: [D+'heavy-badge-trucker.png', D+'heavy-badge-trucker2.png'],
    type: 'hat',
    sizes: ['S/M', 'L/XL'],
    material: 'Richardson 112 · Black / Charcoal',
    price: '$38', bg: '#0a0a0a', fit: 'contain', scale: 80, isNew: true
  },
  'Skull Icon Snapback': {
    images: [D+'skull-snapback.png', D+'skull-snapback2.png'],
    type: 'hat',
    sizes: ['S/M', 'L/XL'],
    material: 'Yupoong 6089M · Black',
    price: '$42', bg: '#0a0a0a', fit: 'contain', scale: 75, isNew: true
  },
  'HMCG Wordmark Dad Hat': {
    images: [D+'hmcg-dad-hat.png', D+'hmcg-dad-hat2.png'],
    type: 'hat',
    sizes: ['One Size'],
    material: 'Flexfit 110 · Black',
    price: '$35', bg: '#0a0a0a', fit: 'contain', scale: 80, isNew: true
  },
  'HMCG Beanie': {
    images: [D+'hmcg-beanie.png', D+'hmcg-beanie2.png'],
    type: 'hat',
    sizes: ['One Size'],
    material: 'Cuffed Ribbed Acrylic · Black',
    price: '$30', bg: '#0a0a0a', fit: 'contain', scale: 75, isNew: true
  },
  */

};
