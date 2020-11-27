import React, { Component } from "react";
import {Link} from 'react-router-dom'
export class HomePage extends Component {
  render() {
    return (
      <div className="Container">
          <h5 className='text-center'>
            Bienvenue sur la plateforme de vente en ligne des produits de la filiere de l exploitation agricolte de Isep Thies
          </h5>
          <h6 className='text-center'>Le programme de formation de technicien supérieur en Exploitation Agricole de l’ISEP-Thiès a pour but de former des personnes compétentes pour exploiter et gérer une entreprise agricole à titre de chef d’exploitation ou d’entrepreneur agricole. Il peut exercer son activité dans divers types d’entreprises et différentes productions. Il peut également agir comme conseiller agricole dans le secteur public ou privé. Il assure la conduite générale des activités d’implantation, d’entretien, de récolte, de conditionnement, d’entreposage et de commercialisation des produits agricole : légumes, fruits, céréales et légumineuses. Il est également apte à produire des végétaux ligneux dédiés à l’agroforesterie et à l’aménagement de vergers et d’espaces verts. De plus il effectue de façon régulière les travaux liés à l’entretien de l’équipement de l’outillage et des bâtiments. Le technicien supérieur en Exploitation Agricole est en mesure de prendre en charge un élevage de volailles : planification de la production ; aménagement des poulaillers ; gestion de l’alimentation et de la santé des sujets ; commercialisation des poulets de chair et des œufs de consommation. Le souci de rentabilité doit orienter les actions du technicien supérieur, en particulier pour ceux qui aspirent à devenir entrepreneurs agricoles.
          Le programme de formation de technicien supérieur en Exploitation Agricole de l’ISEP-Thiès a pour but de former des personnes compétentes pour exploiter et gérer une entreprise agricole à titre de chef d’exploitation ou d’entrepreneur agricole. Il peut exercer son activité dans divers types d’entreprises et différentes productions. Il peut également agir comme conseiller agricole dans le secteur public ou privé. Il assure la conduite générale des activités d’implantation, d’entretien, de récolte, de conditionnement, d’entreposage et de commercialisation des produits agricole : légumes, fruits, céréales et légumineuses. Il est également apte à produire des végétaux ligneux dédiés à l’agroforesterie et à l’aménagement de vergers et d’espaces verts. De plus il effectue de façon régulière les travaux liés à l’entretien de l’équipement de l’outillage et des bâtiments. Le technicien supérieur en Exploitation Agricole est en mesure de prendre en charge un élevage de volailles : planification de la production ; aménagement des poulaillers ; gestion de l’alimentation et de la santé des sujets ; commercialisation des poulets de chair et des œufs de consommation. Le souci de rentabilité doit orienter les actions du technicien supérieur, en particulier pour ceux qui aspirent à devenir entrepreneurs agricoles.
          </h6>
          <p className='text-center'style={{color: 'dodgerblue', fontWeight : 'bold'}}>Pour en savoir plus sur les produits proposer par la filiere <Link to="/product-list" className='text-center btn btn-success '>
            Voir les produits proposer
          </Link></p>
          
      </div>
    );
  }
}

export default HomePage;
