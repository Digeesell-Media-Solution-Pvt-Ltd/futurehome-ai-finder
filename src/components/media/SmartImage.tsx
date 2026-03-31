import type { ImgHTMLAttributes } from "react";

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> & {
  eager?: boolean;
};

export function SmartImage({ eager = false, decoding = "async", ...props }: SmartImageProps) {
  return (
    <img
      {...props}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding={decoding}
    />
  );
}
