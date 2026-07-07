import React from 'react';
import MenuItem from './MenuItem'; // path অনুযায়ী ঠিক করো
import { AiFillHome } from 'react-icons/ai'; // উদাহরণস্বরূপ, হিরো আইকন ব্যবহার করা হয়েছে

export default function Header() {
  return (
    <div>
      <div>
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
      </div>

      <div>
        {/* Other content */}
      </div>
    </div>
  );
}