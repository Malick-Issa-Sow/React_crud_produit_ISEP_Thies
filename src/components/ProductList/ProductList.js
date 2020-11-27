import React, { Component } from "react";


export class ProductList extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header" style={{ backgroundColor: "#87591A" }}>
          <h3 className="card-title ">La Liste des produits de la filiere exploitation agricolte de Isep Thies</h3>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Numero</th>
                <th> le Code de l Item</th>
                <th>Produit Nom</th>
                <th>Prix</th>
                <th>Disponibilite</th>
                <th>Action sur le produit</th>
              </tr>
            </thead>
            <tbody>
             {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
