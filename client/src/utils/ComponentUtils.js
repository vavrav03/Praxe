export const checkVariants = (variant, variants) => {
   if (!Object.keys(variants).includes(variant)) {
      throw `Variant "${variant} is not present in: ${variants}"`;
   }
};
