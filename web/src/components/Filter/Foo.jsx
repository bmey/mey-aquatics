import React from 'react';

export const Foo = ({ origin, subOrigins }) => {

  return (
    <div key={`asdf-${origin.id}`}>
      hello {origin.id}
      {/* <span key="asdf">
          <OriginCheckbox
            {...rest}
            {...filterActions}
            data-test={`filter-origin-${origin.id}`}
            key={`check-${origin.id}`}
          />
        </span> */}
      <FooMap subOrigins={subOrigins} />

    </div>
  )

}

const FooMap = ({ subOrigins }) => {
  console.log(subOrigins);
  return (
    <div>
      {subOrigins.toString()}
      {/* {subOrigins.map((subOrigin, i) => {
        return (
          <div key={`hey-${subOrigin.id}`}>{subOrigin.id}</div>
          // <OriginCheckbox
          //   {...subOrigin}
          //   {...filterActions}
          //   key={subOrigin.id}
          //   data-test={`filter-origin-${subOrigin.id}`}
          //   style={{ marginLeft: '20px', maxWidth: '100px', width: '100px' }}
          // />
        );
      })} */}
    </div>
  )
}