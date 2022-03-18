import React from "react";
import { Collapse, CustomInput } from "reactstrap";

function TheftNeighbourhoods(props) {
  return (
    <Collapse
      className="neighbourhood-checkboxes"
      isOpen={props.theftNeighbourhood}
    >
      <div>
        <h2 className="neighbourhood-cat">Neighbourhoods A - L</h2>
        <div className="filter-row-1 filter-selections">
          <div className="filter-col-1">
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Agincourt South-Malvern West"
              )}
              id="agincourt-theft"
              label="Agincourt South-Malvern West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Agincourt South-Malvern West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Alderwood"
              )}
              id="alderwood-theft"
              label="Alderwood"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Alderwood")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes("Annex")}
              id="annex-theft"
              label="Annex"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Annex")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Banbury-Don Mills"
              )}
              id="banbury-don-mills-theft"
              label="Banbury-Don Mills"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Banbury-Don Mills"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Bathurst Manor"
              )}
              id="bathurst-manor-theft"
              label="Bathurst Manor"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Bathurst Manor"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Bay Street Corridor"
              )}
              id="bay-street-corridor-theft"
              label="Bay Street Corridor"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Bay Street Corridor"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Bayview Village"
              )}
              id="bayview-village-theft"
              label="Bayview Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Bayview Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Bayview Woods-Steeles"
              )}
              id="bayview-woods-steeles-theft"
              label="Bayview Woods-Steeles"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Bayview Woods-Steeles"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Bedford Park-Nortown"
              )}
              id="bedford-park-nortown-theft"
              label="Bedford Park-Nortown"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Bedford Park-Nortown"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Beechborough-Greenbrook"
              )}
              id="beechborough-greenbrook-theft"
              label="Beechborough-Greenbrook"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Beechborough-Greenbrook"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Bendale"
              )}
              id="bendale-theft"
              label="Bendale"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Bendale")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Birchcliffe-Cliffside"
              )}
              id="birchcliffe-cliffside-theft"
              label="Birchcliffe-Cliffside"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Birchcliffe-Cliffside"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Black Creek"
              )}
              id="black-creek-theft"
              label="Black Creek"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Black Creek"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Blake-Jones"
              )}
              id="blake-jones-theft"
              label="Blake-Jones"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Blake-Jones"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Briar Hill-Belgravia"
              )}
              id="briar-hill-belgravia-theft"
              label="Briar Hill-Belgravia"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Briar Hill-Belgravia"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Bridle Path-Sunnybrook-York Mills"
              )}
              id="bridle-path-sunnybrook-york-mills-theft"
              label="Bridle Path-Sunnybrook-York Mills"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Bridle Path-Sunnybrook-York Mills"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Broadview North"
              )}
              id="broadview-north-theft"
              label="Broadview North"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Broadview North"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Brookhaven-Amesbury"
              )}
              id="brookhaven-amesbury-theft"
              label="Brookhaven-Amesbury"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Brookhaven-Amesbury"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Cabbagetown-South St.James Town"
              )}
              id="cabbagetown-south-stjames-town-theft"
              label="Cabbagetown-South St.James Town"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Cabbagetown-South St.James Town"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Caledonia-Fairbank"
              )}
              id="caledonia-fairbank-theft"
              label="Caledonia-Fairbank"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Caledonia-Fairbank"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Casa Loma"
              )}
              id="casa-loma-theft"
              label="Casa Loma"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Casa Loma")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Centennial Scarborough"
              )}
              id="centennial-scarborough-theft"
              label="Centennial Scarborough"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Centennial Scarborough"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Church-Yonge Corridor"
              )}
              id="church-yonge-corridor-theft"
              label="Church-Yonge Corridor"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Church-Yonge Corridor"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Clairlea-Birchmount"
              )}
              id="clairlea-birchmount-theft"
              label="Clairlea-Birchmount"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Clairlea-Birchmount"
                )
              }
            />
          </div>
          <div className="filter-col-2">
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Clanton Park"
              )}
              id="clanton-park-theft"
              label="Clanton Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Clanton Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Cliffcrest"
              )}
              id="cliffcrest-theft"
              label="Cliffcrest"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Cliffcrest")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Corso Italia-Davenport"
              )}
              id="corso-italia-davenport-theft"
              label="Corso Italia-Davenport"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Corso Italia-Davenport"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Danforth"
              )}
              id="danforth-theft"
              label="Danforth"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Danforth")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Danforth East York"
              )}
              id="danforth-east-york-theft"
              label="Danforth East York"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Danforth East York"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Don Valley Village"
              )}
              id="don-valley-village-theft"
              label="Don Valley Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Don Valley Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Dorset Park"
              )}
              id="dorset-park-theft"
              label="Dorset Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Dorset Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Dovercourt-Wallace Emerson-Junction"
              )}
              id="dovercourt-wallace-emerson-junction-theft"
              label="Dovercourt-Wallace Emerson-Junction"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Dovercourt-Wallace Emerson-Junction"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Downsview-Roding-CFB"
              )}
              id="downsview-roding-cfb-theft"
              label="Downsview-Roding-CFB"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Downsview-Roding-CFB"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Dufferin Grove"
              )}
              id="dufferin-grove-theft"
              label="Dufferin Grove"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Dufferin Grove"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "East End-Danforth"
              )}
              id="east-end-danforth-theft"
              label="East End-Danforth"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "East End-Danforth"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Edenbridge-Humber Valley"
              )}
              id="edenbridge-humber-valley-theft"
              label="Edenbridge-Humber Valley"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Edenbridge-Humber Valley"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Eglinton East"
              )}
              id="eglinton-east-theft"
              label="Eglinton East"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Eglinton East"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Elms-Old Rexdale"
              )}
              id="elms-old-rexdale-theft"
              label="Elms-Old Rexdale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Elms-Old Rexdale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Englemount-Lawrence"
              )}
              id="englemount-lawrence-theft"
              label="Englemount-Lawrence"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Englemount-Lawrence"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Eringate-Centennial-West Deane"
              )}
              id="eringate-centennial-west-deane-theft"
              label="Eringate-Centennial-West Deane"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Eringate-Centennial-West Deane"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Etobicoke West Mall"
              )}
              id="etobicoke-west-mall-theft"
              label="Etobicoke West Mall"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Etobicoke West Mall"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Flemingdon Park"
              )}
              id="flemingdon-park-theft"
              label="Flemingdon Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Flemingdon Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Forest Hill North"
              )}
              id="forest-hill-north-theft"
              label="Forest Hill North"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Forest Hill North"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Glenfield-Jane Heights"
              )}
              id="glenfield-jane-heights-theft"
              label="Glenfield-Jane Heights"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Glenfield-Jane Heights"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Greenwood-Coxwell"
              )}
              id="greenwood-coxwell-theft"
              label="Greenwood-Coxwell"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Greenwood-Coxwell"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Guildwood"
              )}
              id="guildwood-theft"
              label="Guildwood"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Guildwood")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Henry Farm"
              )}
              id="henry-farm-theft"
              label="Henry Farm"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Henry Farm")
              }
            />
          </div>
          <div className="filter-col-3">
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "High Park North"
              )}
              id="high-park-north-theft"
              label="High Park North"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "High Park North"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "High Park-Swansea"
              )}
              id="high-park-swansea-theft"
              label="High Park-Swansea"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "High Park-Swansea"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Highland Creek"
              )}
              id="highland-creek-theft"
              label="Highland Creek"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Highland Creek"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Hillcrest Village"
              )}
              id="hillcrest-village-theft"
              label="Hillcrest Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Hillcrest Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Humber Heights-Westmount"
              )}
              id="humber-heights-westmount-theft"
              label="Humber Heights-Westmount"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Humber Heights-Westmount"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Humber Summit"
              )}
              id="humber-summit-theft"
              label="Humber Summit"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Humber Summit"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Humbermede"
              )}
              id="humbermede-theft"
              label="Humbermede"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Humbermede")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Humewood-Cedarvale"
              )}
              id="humewood-cedarvale-theft"
              label="Humewood-Cedarvale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Humewood-Cedarvale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Ionview"
              )}
              id="ionview-theft"
              label="Ionview"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Ionview")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Islington-City Centre West"
              )}
              id="islington-city-centre-west-theft"
              label="Islington-City Centre West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Islington-City Centre West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Junction Area"
              )}
              id="junction-area-theft"
              label="Junction Area"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Junction Area"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Keelesdale-Eglinton West"
              )}
              id="keelesdale-eglinton-west-theft"
              label="Keelesdale-Eglinton West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Keelesdale-Eglinton West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Kennedy Park"
              )}
              id="kennedy-park-theft"
              label="Kennedy Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Kennedy Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Kensington-Chinatown"
              )}
              id="kensington-chinatown-theft"
              label="Kensington-Chinatown"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Kensington-Chinatown"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Kingsview Village-The Westway"
              )}
              id="kingsview-village-the-westway-theft"
              label="Kingsview Village-The Westway"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Kingsview Village-The Westway"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Kingsway South"
              )}
              id="kingsway-south-theft"
              label="Kingsway South"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Kingsway South"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "L’Amoreaux"
              )}
              id="lamoreaux-theft"
              label="L’Amoreaux"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "L’Amoreaux")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Lambton Baby Point"
              )}
              id="lambton-baby-point-theft"
              label="Lambton Baby Point"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Lambton Baby Point"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Lansing-Westgate"
              )}
              id="lansing-westgate-theft"
              label="Lansing-Westgate"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Lansing-Westgate"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Lawrence Park North"
              )}
              id="lawrence-park-north-theft"
              label="Lawrence Park North"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Lawrence Park North"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Leaside-Bennington"
              )}
              id="leaside-bennington-theft"
              label="Leaside-Bennington"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Leaside-Bennington"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Little Portugal"
              )}
              id="little-portugal-theft"
              label="Little Portugal"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Little Portugal"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Long Branch"
              )}
              id="long-branch-theft"
              label="Long Branch"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Long Branch"
                )
              }
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="neighbourhood-cat">Neighbourhoods M - Z</h2>
        <div className="filter-row-2 filter-selections">
          <div className="filter-col-4">
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Malvern"
              )}
              id="malvern-theft"
              label="Malvern"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Malvern")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Maple Leaf"
              )}
              id="maple-leaf-theft"
              label="Maple Leaf"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Maple Leaf")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Markland Wood"
              )}
              id="markland-wood-theft"
              label="Markland Wood"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Markland Wood"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Milliken"
              )}
              id="milliken-theft"
              label="Milliken"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Milliken")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Mimico (includes Humber Bay Shores)"
              )}
              id="mimico-theft"
              label="Mimico (includes Humber Bay Shores)"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Mimico (includes Humber Bay Shores)"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Morningside"
              )}
              id="morningside-theft"
              label="Morningside"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Morningside"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Moss Park"
              )}
              id="moss-park-theft"
              label="Moss Park"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Moss Park")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Mount Dennis"
              )}
              id="mount-dennis-theft"
              label="Mount Dennis"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Mount Dennis"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Mount Olive-Silverstone-Jamestown"
              )}
              id="mount-olive-silverstone-jamestown-theft"
              label="Mount Olive-Silverstone-Jamestown"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Mount Olive-Silverstone-Jamestown"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Mount Pleasant East"
              )}
              id="mount-pleasant-east-theft"
              label="Mount Pleasant East"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Mount Pleasant East"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Mount Pleasant West"
              )}
              id="mount-pleasant-west-theft"
              label="Mount Pleasant West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Mount Pleasant West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "New Toronto"
              )}
              id="new-toronto-theft"
              label="New Toronto"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "New Toronto"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Newtonbrook East"
              )}
              id="newtonbrook-east-theft"
              label="Newtonbrook East"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Newtonbrook East"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Newtonbrook West"
              )}
              id="newtonbrook-west-theft"
              label="Newtonbrook West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Newtonbrook West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Niagara"
              )}
              id="niagara-theft"
              label="Niagara"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Niagara")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "North Riverdale"
              )}
              id="north-riverdale-theft"
              label="North Riverdale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "North Riverdale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "North St.James Town"
              )}
              id="north-stjames-town-theft"
              label="North St.James Town"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "North St.James Town"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "O’Connor-Parkview"
              )}
              id="oconnor-parkview-theft"
              label="O’Connor-Parkview"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "O’Connor-Parkview"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Oakridge"
              )}
              id="oakridge-theft"
              label="Oakridge"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Oakridge")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Oakwood Village"
              )}
              id="oakwood-village-theft"
              label="Oakwood Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Oakwood Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Old East York"
              )}
              id="old-east-york-theft"
              label="Old East York"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Old East York"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Parkwoods-Donalda"
              )}
              id="parkwoods-donalda-theft"
              label="Parkwoods-Donalda"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Parkwoods-Donalda"
                )
              }
            />
          </div>
          <div className="filter-col-5">
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Palmerston-Little Italy"
              )}
              id="palmerston-little-italy-theft"
              label="Palmerston-Little Italy"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Palmerston-Little Italy"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Pelmo Park-Humberlea"
              )}
              id="pelmo-park-humberlea-theft"
              label="Pelmo Park-Humberlea"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Pelmo Park-Humberlea"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Playter Estates-Danforth"
              )}
              id="playter-estates-danforth-theft"
              label="Playter Estates-Danforth"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Playter Estates-Danforth"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Pleasant View"
              )}
              id="pleasant-view-theft"
              label="Pleasant View"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Pleasant View"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Princess-Rosethorn"
              )}
              id="princess-rosethorn-theft"
              label="Princess-Rosethorn"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Princess-Rosethorn"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Regent Park"
              )}
              id="regent-park-theft"
              label="Regent Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Regent Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Rexdale-Kipling"
              )}
              id="rexdale-kipling-theft"
              label="Rexdale-Kipling"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Rexdale-Kipling"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Rockcliffe-Smythe"
              )}
              id="rockcliffe-smythe-theft"
              label="Rockcliffe-Smythe"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Rockcliffe-Smythe"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Roncesvalles"
              )}
              id="roncesvalles-theft"
              label="Roncesvalles"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Roncesvalles"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Rosedale-Moore Park"
              )}
              id="rosedale-moore-park-theft"
              label="Rosedale-Moore Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Rosedale-Moore Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes("Rouge")}
              id="rouge-theft"
              label="Rouge"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Rouge")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Runnymede-Bloor West Village"
              )}
              id="runnymede-bloor-west-village-theft"
              label="Runnymede-Bloor West Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Runnymede-Bloor West Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Rustic"
              )}
              id="rustic-theft"
              label="Rustic"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Rustic")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Scarborough Village"
              )}
              id="scarborough-village-theft"
              label="Scarborough Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Scarborough Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "South Parkdale"
              )}
              id="south-parkdale-theft"
              label="South Parkdale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "South Parkdale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "South Riverdale"
              )}
              id="south-riverdale-theft"
              label="South Riverdale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "South Riverdale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "St.Andrew-Windfields"
              )}
              id="standrew-windfields-theft"
              label="St.Andrew-Windfields"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "St.Andrew-Windfields"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Steeles"
              )}
              id="steeles-theft"
              label="Steeles"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Steeles")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Stonegate-Queensway"
              )}
              id="stonegate-queensway-theft"
              label="Stonegate-Queensway"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Stonegate-Queensway"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Tam O’Shanter-Sullivan"
              )}
              id="tam-oshanter-sullivan-theft"
              label="Tam O’Shanter-Sullivan"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Tam O’Shanter-Sullivan"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Taylor-Massey"
              )}
              id="taylor-massey-theft"
              label="Taylor-Massey"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Taylor-Massey"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "The Beaches"
              )}
              id="the-beaches-theft"
              label="The Beaches"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "The Beaches"
                )
              }
            />
          </div>
          <div className="filter-col-6">
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Thistletown-Beaumond Heights"
              )}
              id="thistletown-beaumond-heights-theft"
              label="Thistletown-Beaumond Heights"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Thistletown-Beaumond Heights"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Thorncliffe Park"
              )}
              id="thorncliffe-park-theft"
              label="Thorncliffe Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Thorncliffe Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Trinity-Bellwoods"
              )}
              id="trinity-bellwoods-theft"
              label="Trinity-Bellwoods"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Trinity-Bellwoods"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "University"
              )}
              id="university-theft"
              label="University"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "University")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Victoria Village"
              )}
              id="victoria-village-theft"
              label="Victoria Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Victoria Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Waterfront Communities-The Island"
              )}
              id="waterfront-communities-the-island-theft"
              label="Waterfront Communities-The Island"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Waterfront Communities-The Island"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "West Hill"
              )}
              id="west-hill-theft"
              label="West Hill"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "West Hill")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "West Humber-Clairville"
              )}
              id="west-humber-clairville-theft"
              label="West Humber-Clairville"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "West Humber-Clairville"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Weston"
              )}
              id="weston-theft"
              label="Weston"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Weston")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Weston-Pellam Park"
              )}
              id="weston-pellam-park-theft"
              label="Weston-Pellam Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Weston-Pellam Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Wexford/Maryvale"
              )}
              id="wexford-maryvale-theft"
              label="Wexford/Maryvale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Wexford/Maryvale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Willowdale East"
              )}
              id="willowdale-east-theft"
              label="Willowdale East"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Willowdale East"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Willowdale West"
              )}
              id="willowdale-west-theft"
              label="Willowdale West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Willowdale West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Willowridge-Martingrove-Richview"
              )}
              id="willowridge-martingrove-richview-theft"
              label="Willowridge-Martingrove-Richview"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Willowridge-Martingrove-Richview"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Woburn"
              )}
              id="woburn-theft"
              label="Woburn"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Woburn")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Woodbine Corridor"
              )}
              id="woodbine-corridor-theft"
              label="Woodbine Corridor"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Woodbine Corridor"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Woodbine-Lumsden"
              )}
              id="woodbine-lumsden-theft"
              label="Woodbine-Lumsden"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Woodbine-Lumsden"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Wychwood"
              )}
              id="wychwood-theft"
              label="Wychwood"
              onChange={(e) =>
                props.toggleFilter(e, "theftNeighbourhoodChoices", "Wychwood")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Yonge-Eglinton"
              )}
              id="yonge-eglinton-theft"
              label="Yonge-Eglinton"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Yonge-Eglinton"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Yonge-St.Clair"
              )}
              id="yonge-stclair-theft"
              label="Yonge-St.Clair"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Yonge-St.Clair"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "York University Heights"
              )}
              id="york-university-heights-theft"
              label="York University Heights"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "York University Heights"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.theftNeighbourhoodChoices.includes(
                "Yorkdale-Glen Park"
              )}
              id="yorkdale-glen-park-theft"
              label="Yorkdale-Glen Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "theftNeighbourhoodChoices",
                  "Yorkdale-Glen Park"
                )
              }
            />
          </div>
        </div>
      </div>
    </Collapse>
  );
}

export default TheftNeighbourhoods;
