import ChangeNotifier from "./change_notifier";
import React from 'react';

export default function useChangeNotifier(value: ChangeNotifier): void {
  const [version, setVersion] = React.useState<number>(0);
  
  React.useEffect(
    () => {
      function listener(): void {
        setVersion(version + 1);
      }
      
      value.addListener(listener);

      return () => value.removeListener(listener);
    }
  );
}