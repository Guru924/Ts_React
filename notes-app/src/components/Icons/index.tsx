   import React from 'react';
   
   type IconType = React.ComponentType<any>;

   type IconComponentProps = {
     icon: IconType;
   };
   
   const IconComponent: React.FC<IconComponentProps> = ({ icon: Icon }) => {
     return <Icon />;
   };
   
   export default IconComponent;