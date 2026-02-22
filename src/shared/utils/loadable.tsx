import React, { lazy, Suspense } from "react";
import type { ComponentType } from "react";

interface LoadableOptions {
   fallback?: React.ReactNode;
}

function loadable<P = {}>(
   importFunc: () => Promise<{ default: ComponentType<P> }>,
   options: LoadableOptions = {},
): ComponentType<P> {
   const LazyComponent = lazy(importFunc);

   const Component: React.FC<P> = (props) => (
      <Suspense fallback={options.fallback || null}>
         <LazyComponent {...(props as any)} />
      </Suspense>
   );

   Component.displayName = "Loadable";

   return Component;
}

export default loadable;
