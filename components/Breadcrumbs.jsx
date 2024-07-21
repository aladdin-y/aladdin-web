import React from 'react';
let style = "/";
function Breadcrumbs({ paths }) {
  return (
    <nav className="text-white mb-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2"> {style} </span>}
            {index === paths.length - 1 ? (
              <span className='text-amber-400'>{path.label}</span>
            ) : (
              <a href={path.href} className="hover:underline">{path.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
