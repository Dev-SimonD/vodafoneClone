import React from "react";
import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import classes from "./CastoKladeneDotazy.module.css";

function CastoKladeneDotazy() {
  return (
    <div>
      <UncontrolledAccordion
        /*  defaultOpen={["1", "2"]} */ stayOpen
        style={{ borderRadius: "20px" }}
      >
        <AccordionItem
          className={classes.item}
          style={{ borderRadius: "20px", marginBlock: "20px" }}
        >
          <AccordionHeader targetId="1">
            Co znamená spojení služeb?
          </AccordionHeader>
          <AccordionBody accordionId="1" style={{ padding: "20px" }}>
            Čím víc služeb od Vodafonu budete využívat, tím větší slevu získáte.
            Základem je ale vždy náš pevný internet. Všechny služby od Vodafonu
            také musíte mít pod jedním účtem.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem style={{ borderRadius: "20px", marginBlock: "20px" }}>
          <AccordionHeader targetId="2">
            Jakou dostanu slevu, pokud si službu pořídím v nabídce Ještě
            výhodnější spojení od Vodafonu?
          </AccordionHeader>
          <AccordionBody accordionId="2" style={{ padding: "20px" }}>
            Základem je vždy Pevný internet od Vodafonu. Bez něj nemáte na
            zvýhodnění nárok. Pořídíte-li si od nás například internet na doma s
            rychlostí 1 Gb/s spolu s tarifem Neomezený Super, dostanete slevu
            200 Kč z běžné ceníkové ceny tarifu a navíc i slevu 300 Kč z ceny
            internetu. Ušetřete tak 500 Kč měsíčně. Služby ale můžete kombinovat
            různě. Máte internet a více SIM karet? Sledujete i Vodafone TV?
            Kombinací a možností jak ušetřit může být opravdu hodně. Nechte nám
            tu číslo, ozveme se vám, poradíme, jak nakombinovat a spojit služby,
            abyste získali co nejvyšší slevu. Zvýhodnění vám zůstane už napořád!
            V naší speciální nabídce Ještě výhodnější spojení od Vodafonu už
            jsou tyto slevy započítány.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem style={{ borderRadius: "20px", marginBlock: "20px" }}>
          <AccordionHeader targetId="3">
            Na jaké rychlosti internetu platí sleva v rámci nabídky Ještě
            výhodnější spojení od Vodafonu?
          </AccordionHeader>
          <AccordionBody accordionId="3" style={{ padding: "20px" }}>
            Slevu získáte, pokud si pořídíte internet s rychlostí 150, 300, 500
            Mb/s a 1 Gb/s společně s jedním z našich neomezených mobilních
            tarifů. Měsíčně můžete ušetřit za internet až 360 Kč.
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </div>
  );
}

export default CastoKladeneDotazy;
