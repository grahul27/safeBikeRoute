import React from "react";
import { Collapse, CustomInput } from "reactstrap";

function AccidentNeighbourhoods(props) {
  return (
    <Collapse
      className="neighbourhood-checkboxes"
      isOpen={props.accidentNeighbourhood}
    >
      <div>
        <h2 className="neighbourhood-cat">Neighbourhoods A - L</h2>
        <div className="filter-row-1 filter-selections">
          <div className="filter-col-1">
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Agincourt South-Malvern West"
              )}
              id="agincourt-accident"
              label="Agincourt South-Malvern West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Agincourt South-Malvern West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Alderwood"
              )}
              id="alderwood-accident"
              label="Alderwood"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Alderwood"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Annex"
              )}
              id="annex-accident"
              label="Annex"
              onChange={(e) =>
                props.toggleFilter(e, "accidentNeighbourhoodChoices", "Annex")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Banbury-Don Mills"
              )}
              id="banbury-don-mills-accident"
              label="Banbury-Don Mills"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Banbury-Don Mills"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Bathurst Manor"
              )}
              id="bathurst-manor-accident"
              label="Bathurst Manor"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Bathurst Manor"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Bay Street Corridor"
              )}
              id="bay-street-corridor-accident"
              label="Bay Street Corridor"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Bay Street Corridor"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Bayview Village"
              )}
              id="bayview-village-accident"
              label="Bayview Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Bayview Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Bayview Woods-Steeles"
              )}
              id="bayview-woods-steeles-accident"
              label="Bayview Woods-Steeles"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Bayview Woods-Steeles"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Bedford Park-Nortown"
              )}
              id="bedford-park-nortown-accident"
              label="Bedford Park-Nortown"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Bedford Park-Nortown"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Beechborough-Greenbrook"
              )}
              id="beechborough-greenbrook-accident"
              label="Beechborough-Greenbrook"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Beechborough-Greenbrook"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Bendale"
              )}
              id="bendale-accident"
              label="Bendale"
              onChange={(e) =>
                props.toggleFilter(e, "accidentNeighbourhoodChoices", "Bendale")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Birchcliffe-Cliffside"
              )}
              id="birchcliffe-cliffside-accident"
              label="Birchcliffe-Cliffside"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Birchcliffe-Cliffside"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Black Creek"
              )}
              id="black-creek-accident"
              label="Black Creek"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Black Creek"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Blake-Jones"
              )}
              id="blake-jones-accident"
              label="Blake-Jones"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Blake-Jones"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Briar Hill-Belgravia"
              )}
              id="briar-hill-belgravia-accident"
              label="Briar Hill-Belgravia"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Briar Hill-Belgravia"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Bridle Path-Sunnybrook-York Mills"
              )}
              id="bridle-path-sunnybrook-york-mills-accident"
              label="Bridle Path-Sunnybrook-York Mills"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Bridle Path-Sunnybrook-York Mills"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Broadview North"
              )}
              id="broadview-north-accident"
              label="Broadview North"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Broadview North"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Brookhaven-Amesbury"
              )}
              id="brookhaven-amesbury-accident"
              label="Brookhaven-Amesbury"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Brookhaven-Amesbury"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Cabbagetown-South St.James Town"
              )}
              id="cabbagetown-south-stjames-town-accident"
              label="Cabbagetown-South St.James Town"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Cabbagetown-South St.James Town"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Caledonia-Fairbank"
              )}
              id="caledonia-fairbank-accident"
              label="Caledonia-Fairbank"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Caledonia-Fairbank"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Casa Loma"
              )}
              id="casa-loma-accident"
              label="Casa Loma"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Casa Loma"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Centennial Scarborough"
              )}
              id="centennial-scarborough-accident"
              label="Centennial Scarborough"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Centennial Scarborough"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Church-Yonge Corridor"
              )}
              id="church-yonge-corridor-accident"
              label="Church-Yonge Corridor"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Church-Yonge Corridor"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Clairlea-Birchmount"
              )}
              id="clairlea-birchmount-accident"
              label="Clairlea-Birchmount"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Clairlea-Birchmount"
                )
              }
            />
          </div>
          <div className="filter-col-2">
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Clanton Park"
              )}
              id="clanton-park-accident"
              label="Clanton Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Clanton Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Cliffcrest"
              )}
              id="cliffcrest-accident"
              label="Cliffcrest"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Cliffcrest"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Corso Italia-Davenport"
              )}
              id="corso-italia-davenport-accident"
              label="Corso Italia-Davenport"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Corso Italia-Davenport"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Danforth"
              )}
              id="danforth-accident"
              label="Danforth"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Danforth"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Danforth East York"
              )}
              id="danforth-east-york-accident"
              label="Danforth East York"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Danforth East York"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Don Valley Village"
              )}
              id="don-valley-village-accident"
              label="Don Valley Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Don Valley Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Dorset Park"
              )}
              id="dorset-park-accident"
              label="Dorset Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Dorset Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Dovercourt-Wallace Emerson-Junction"
              )}
              id="dovercourt-wallace-emerson-junction-accident"
              label="Dovercourt-Wallace Emerson-Junction"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Dovercourt-Wallace Emerson-Junction"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Downsview-Roding-CFB"
              )}
              id="downsview-roding-cfb-accident"
              label="Downsview-Roding-CFB"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Downsview-Roding-CFB"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Dufferin Grove"
              )}
              id="dufferin-grove-accident"
              label="Dufferin Grove"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Dufferin Grove"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "East End-Danforth"
              )}
              id="east-end-danforth-accident"
              label="East End-Danforth"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "East End-Danforth"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Edenbridge-Humber Valley"
              )}
              id="edenbridge-humber-valley-accident"
              label="Edenbridge-Humber Valley"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Edenbridge-Humber Valley"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Eglinton East"
              )}
              id="eglinton-east-accident"
              label="Eglinton East"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Eglinton East"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Elms-Old Rexdale"
              )}
              id="elms-old-rexdale-accident"
              label="Elms-Old Rexdale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Elms-Old Rexdale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Englemount-Lawrence"
              )}
              id="englemount-lawrence-accident"
              label="Englemount-Lawrence"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Englemount-Lawrence"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Eringate-Centennial-West Deane"
              )}
              id="eringate-centennial-west-deane-accident"
              label="Eringate-Centennial-West Deane"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Eringate-Centennial-West Deane"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Etobicoke West Mall"
              )}
              id="etobicoke-west-mall-accident"
              label="Etobicoke West Mall"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Etobicoke West Mall"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Flemingdon Park"
              )}
              id="flemingdon-park-accident"
              label="Flemingdon Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Flemingdon Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Forest Hill North"
              )}
              id="forest-hill-north-accident"
              label="Forest Hill North"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Forest Hill North"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Glenfield-Jane Heights"
              )}
              id="glenfield-jane-heights-accident"
              label="Glenfield-Jane Heights"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Glenfield-Jane Heights"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Greenwood-Coxwell"
              )}
              id="greenwood-coxwell-accident"
              label="Greenwood-Coxwell"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Greenwood-Coxwell"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Guildwood"
              )}
              id="guildwood-accident"
              label="Guildwood"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Guildwood"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Henry Farm"
              )}
              id="henry-farm-accident"
              label="Henry Farm"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Henry Farm"
                )
              }
            />
          </div>
          <div className="filter-col-3">
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "High Park North"
              )}
              id="high-park-north-accident"
              label="High Park North"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "High Park North"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "High Park-Swansea"
              )}
              id="high-park-swansea-accident"
              label="High Park-Swansea"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "High Park-Swansea"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Highland Creek"
              )}
              id="highland-creek-accident"
              label="Highland Creek"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Highland Creek"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Hillcrest Village"
              )}
              id="hillcrest-village-accident"
              label="Hillcrest Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Hillcrest Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Humber Heights-Westmount"
              )}
              id="humber-heights-westmount-accident"
              label="Humber Heights-Westmount"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Humber Heights-Westmount"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Humber Summit"
              )}
              id="humber-summit-accident"
              label="Humber Summit"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Humber Summit"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Humbermede"
              )}
              id="humbermede-accident"
              label="Humbermede"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Humbermede"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Humewood-Cedarvale"
              )}
              id="humewood-cedarvale-accident"
              label="Humewood-Cedarvale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Humewood-Cedarvale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Ionview"
              )}
              id="ionview-accident"
              label="Ionview"
              onChange={(e) =>
                props.toggleFilter(e, "accidentNeighbourhoodChoices", "Ionview")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Islington-City Centre West"
              )}
              id="islington-city-centre-west-accident"
              label="Islington-City Centre West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Islington-City Centre West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Junction Area"
              )}
              id="junction-area-accident"
              label="Junction Area"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Junction Area"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Keelesdale-Eglinton West"
              )}
              id="keelesdale-eglinton-west-accident"
              label="Keelesdale-Eglinton West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Keelesdale-Eglinton West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Kennedy Park"
              )}
              id="kennedy-park-accident"
              label="Kennedy Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Kennedy Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Kensington-Chinatown"
              )}
              id="kensington-chinatown-accident"
              label="Kensington-Chinatown"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Kensington-Chinatown"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Kingsview Village-The Westway"
              )}
              id="kingsview-village-the-westway-accident"
              label="Kingsview Village-The Westway"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Kingsview Village-The Westway"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Kingsway South"
              )}
              id="kingsway-south-accident"
              label="Kingsway South"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Kingsway South"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "L’Amoreaux"
              )}
              id="lamoreaux-accident"
              label="L’Amoreaux"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "L’Amoreaux"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Lambton Baby Point"
              )}
              id="lambton-baby-point-accident"
              label="Lambton Baby Point"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Lambton Baby Point"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Lansing-Westgate"
              )}
              id="lansing-westgate-accident"
              label="Lansing-Westgate"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Lansing-Westgate"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Lawrence Park North"
              )}
              id="lawrence-park-north-accident"
              label="Lawrence Park North"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Lawrence Park North"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Leaside-Bennington"
              )}
              id="leaside-bennington-accident"
              label="Leaside-Bennington"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Leaside-Bennington"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Little Portugal"
              )}
              id="little-portugal-accident"
              label="Little Portugal"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Little Portugal"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Long Branch"
              )}
              id="long-branch-accident"
              label="Long Branch"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
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
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Malvern"
              )}
              id="malvern-accident"
              label="Malvern"
              onChange={(e) =>
                props.toggleFilter(e, "accidentNeighbourhoodChoices", "Malvern")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Maple Leaf"
              )}
              id="maple-leaf-accident"
              label="Maple Leaf"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Maple Leaf"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Markland Wood"
              )}
              id="markland-wood-accident"
              label="Markland Wood"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Markland Wood"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Milliken"
              )}
              id="milliken-accident"
              label="Milliken"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Milliken"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Mimico (includes Humber Bay Shores)"
              )}
              id="mimico-accident"
              label="Mimico (includes Humber Bay Shores)"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Mimico (includes Humber Bay Shores)"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Morningside"
              )}
              id="morningside-accident"
              label="Morningside"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Morningside"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Moss Park"
              )}
              id="moss-park-accident"
              label="Moss Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Moss Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Mount Dennis"
              )}
              id="mount-dennis-accident"
              label="Mount Dennis"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Mount Dennis"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Mount Olive-Silverstone-Jamestown"
              )}
              id="mount-olive-silverstone-jamestown-accident"
              label="Mount Olive-Silverstone-Jamestown"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Mount Olive-Silverstone-Jamestown"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Mount Pleasant East"
              )}
              id="mount-pleasant-east-accident"
              label="Mount Pleasant East"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Mount Pleasant East"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Mount Pleasant West"
              )}
              id="mount-pleasant-west-accident"
              label="Mount Pleasant West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Mount Pleasant West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "New Toronto"
              )}
              id="new-toronto-accident"
              label="New Toronto"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "New Toronto"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Newtonbrook East"
              )}
              id="newtonbrook-east-accident"
              label="Newtonbrook East"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Newtonbrook East"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Newtonbrook West"
              )}
              id="newtonbrook-west-accident"
              label="Newtonbrook West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Newtonbrook West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Niagara"
              )}
              id="niagara-accident"
              label="Niagara"
              onChange={(e) =>
                props.toggleFilter(e, "accidentNeighbourhoodChoices", "Niagara")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "North Riverdale"
              )}
              id="north-riverdale-accident"
              label="North Riverdale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "North Riverdale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "North St.James Town"
              )}
              id="north-stjames-town-accident"
              label="North St.James Town"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "North St.James Town"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "O’Connor-Parkview"
              )}
              id="oconnor-parkview-accident"
              label="O’Connor-Parkview"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "O’Connor-Parkview"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Oakridge"
              )}
              id="oakridge-accident"
              label="Oakridge"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Oakridge"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Oakwood Village"
              )}
              id="oakwood-village-accident"
              label="Oakwood Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Oakwood Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Old East York"
              )}
              id="old-east-york-accident"
              label="Old East York"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Old East York"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Parkwoods-Donalda"
              )}
              id="parkwoods-donalda-accident"
              label="Parkwoods-Donalda"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Parkwoods-Donalda"
                )
              }
            />
          </div>
          <div className="filter-col-5">
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Palmerston-Little Italy"
              )}
              id="palmerston-little-italy-accident"
              label="Palmerston-Little Italy"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Palmerston-Little Italy"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Pelmo Park-Humberlea"
              )}
              id="pelmo-park-humberlea-accident"
              label="Pelmo Park-Humberlea"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Pelmo Park-Humberlea"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Playter Estates-Danforth"
              )}
              id="playter-estates-danforth-accident"
              label="Playter Estates-Danforth"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Playter Estates-Danforth"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Pleasant View"
              )}
              id="pleasant-view-accident"
              label="Pleasant View"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Pleasant View"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Princess-Rosethorn"
              )}
              id="princess-rosethorn-accident"
              label="Princess-Rosethorn"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Princess-Rosethorn"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Regent Park"
              )}
              id="regent-park-accident"
              label="Regent Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Regent Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Rexdale-Kipling"
              )}
              id="rexdale-kipling-accident"
              label="Rexdale-Kipling"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Rexdale-Kipling"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Rockcliffe-Smythe"
              )}
              id="rockcliffe-smythe-accident"
              label="Rockcliffe-Smythe"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Rockcliffe-Smythe"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Roncesvalles"
              )}
              id="roncesvalles-accident"
              label="Roncesvalles"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Roncesvalles"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Rosedale-Moore Park"
              )}
              id="rosedale-moore-park-accident"
              label="Rosedale-Moore Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Rosedale-Moore Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Rouge"
              )}
              id="rouge-accident"
              label="Rouge"
              onChange={(e) =>
                props.toggleFilter(e, "accidentNeighbourhoodChoices", "Rouge")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Runnymede-Bloor West Village"
              )}
              id="runnymede-bloor-west-village-accident"
              label="Runnymede-Bloor West Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Runnymede-Bloor West Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Rustic"
              )}
              id="rustic-accident"
              label="Rustic"
              onChange={(e) =>
                props.toggleFilter(e, "accidentNeighbourhoodChoices", "Rustic")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Scarborough Village"
              )}
              id="scarborough-village-accident"
              label="Scarborough Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Scarborough Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "South Parkdale"
              )}
              id="south-parkdale-accident"
              label="South Parkdale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "South Parkdale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "South Riverdale"
              )}
              id="south-riverdale-accident"
              label="South Riverdale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "South Riverdale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "St.Andrew-Windfields"
              )}
              id="standrew-windfields-accident"
              label="St.Andrew-Windfields"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "St.Andrew-Windfields"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Steeles"
              )}
              id="steeles-accident"
              label="Steeles"
              onChange={(e) =>
                props.toggleFilter(e, "accidentNeighbourhoodChoices", "Steeles")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Stonegate-Queensway"
              )}
              id="stonegate-queensway-accident"
              label="Stonegate-Queensway"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Stonegate-Queensway"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Tam O’Shanter-Sullivan"
              )}
              id="tam-oshanter-sullivan-accident"
              label="Tam O’Shanter-Sullivan"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Tam O’Shanter-Sullivan"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Taylor-Massey"
              )}
              id="taylor-massey-accident"
              label="Taylor-Massey"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Taylor-Massey"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "The Beaches"
              )}
              id="the-beaches-accident"
              label="The Beaches"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "The Beaches"
                )
              }
            />
          </div>
          <div className="filter-col-6">
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Thistletown-Beaumond Heights"
              )}
              id="thistletown-beaumond-heights-accident"
              label="Thistletown-Beaumond Heights"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Thistletown-Beaumond Heights"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Thorncliffe Park"
              )}
              id="thorncliffe-park-accident"
              label="Thorncliffe Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Thorncliffe Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Trinity-Bellwoods"
              )}
              id="trinity-bellwoods-accident"
              label="Trinity-Bellwoods"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Trinity-Bellwoods"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "University"
              )}
              id="university-accident"
              label="University"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "University"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Victoria Village"
              )}
              id="victoria-village-accident"
              label="Victoria Village"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Victoria Village"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Waterfront Communities-The Island"
              )}
              id="waterfront-communities-the-island-accident"
              label="Waterfront Communities-The Island"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Waterfront Communities-The Island"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "West Hill"
              )}
              id="west-hill-accident"
              label="West Hill"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "West Hill"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "West Humber-Clairville"
              )}
              id="west-humber-clairville-accident"
              label="West Humber-Clairville"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "West Humber-Clairville"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Weston"
              )}
              id="weston-accident"
              label="Weston"
              onChange={(e) =>
                props.toggleFilter(e, "accidentNeighbourhoodChoices", "Weston")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Weston-Pellam Park"
              )}
              id="weston-pellam-park-accident"
              label="Weston-Pellam Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Weston-Pellam Park"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Wexford/Maryvale"
              )}
              id="wexford-maryvale-accident"
              label="Wexford/Maryvale"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Wexford/Maryvale"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Willowdale East"
              )}
              id="willowdale-east-accident"
              label="Willowdale East"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Willowdale East"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Willowdale West"
              )}
              id="willowdale-west-accident"
              label="Willowdale West"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Willowdale West"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Willowridge-Martingrove-Richview"
              )}
              id="willowridge-martingrove-richview-accident"
              label="Willowridge-Martingrove-Richview"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Willowridge-Martingrove-Richview"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Woburn"
              )}
              id="woburn-accident"
              label="Woburn"
              onChange={(e) =>
                props.toggleFilter(e, "accidentNeighbourhoodChoices", "Woburn")
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Woodbine Corridor"
              )}
              id="woodbine-corridor-accident"
              label="Woodbine Corridor"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Woodbine Corridor"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Woodbine-Lumsden"
              )}
              id="woodbine-lumsden-accident"
              label="Woodbine-Lumsden"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Woodbine-Lumsden"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Wychwood"
              )}
              id="wychwood-accident"
              label="Wychwood"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Wychwood"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Yonge-Eglinton"
              )}
              id="yonge-eglinton-accident"
              label="Yonge-Eglinton"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Yonge-Eglinton"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Yonge-St.Clair"
              )}
              id="yonge-stclair-accident"
              label="Yonge-St.Clair"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "Yonge-St.Clair"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "York University Heights"
              )}
              id="york-university-heights-accident"
              label="York University Heights"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
                  "York University Heights"
                )
              }
            />
            <CustomInput
              type="checkbox"
              defaultChecked={props.accidentNeighbourhoodChoices.includes(
                "Yorkdale-Glen Park"
              )}
              id="yorkdale-glen-park-accident"
              label="Yorkdale-Glen Park"
              onChange={(e) =>
                props.toggleFilter(
                  e,
                  "accidentNeighbourhoodChoices",
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

export default AccidentNeighbourhoods;
