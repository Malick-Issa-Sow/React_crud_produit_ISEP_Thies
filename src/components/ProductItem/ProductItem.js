import React, { Component } from "react";
import {Link} from 'react-router-dom'
export class ProductItem extends Component {
  onDelete = (id) => {
    if(confirm('voulez vous vraiment suprimer ce produit')){//eslint-disable-line
      this.props.onDelete(id)
    }
  }

  render() {
    var {product, index } = this.props
    var statusName = product.status ? 'En stock' : 'N est plus en  Stock'
    var statusClass = product.status ? 'primary' : 'secondary'
    return (
      <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}FCFA</td>
                <td>
                  <span className={`badge  badge-${statusClass}`}>
                    {statusName}
                  </span>
                </td>
                <td>
                  <Link
                    to = {`/product/${product.id}/edit`}
                    className="btn btn-success"
                    style={{ marginRight: 10 }}
                   
                  >
                    Editer
                  </Link>
                  <button 
                  type="button" 
                  className="btn btn-danger" 
                  onClick={() => this.onDelete(product.id)}
                  style={{ marginRight: 10 }}
                  >
                    Suprimer
                  </button>
                  
                  <Link
                    to = {`/product/${product.id}/edit`}
                    className="btn btn-warning"
                    style={{ marginRight: 10 }}
                   
                  >
                    details
                  </Link>
                </td>
              </tr>
    );
  }
}

export default ProductItem;
