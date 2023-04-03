import React from "react";

const CoinLinks = (props) => {
  const { coin, links } = props;

  return (
    <>
      <div className="links">
        <div>
          <h2>{coin.name} links</h2>
        </div>
        <table className="table table-hover">
          <tbody>
            {links.map((link) => {
              return (
                <tr key={link.name}>
                  <th>
                    {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                  </th>
                  <td className="right">
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.name}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CoinLinks;
