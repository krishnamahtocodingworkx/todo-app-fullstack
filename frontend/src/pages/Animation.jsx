import React from "react";
import { motion, useScroll } from "motion/react";
import "./style.css";
import RocketIcon from "../assets/rocketPng-Photoroom.png";

const ball = {
  width: 100,
  height: 100,
  backgroundColor: "#ddffff",
  borderRadius: "5%",
};

const Animation = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="main--container">
      <div className="wrapper">
        {/* <div className="ball--container">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
            }}
            style={ball}
          />
        </div> */}
        <motion.div
          style={{
            scaleX: scrollYProgress,
            background: "green",
            height: "5px",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            transformOrigin: "left",
            borderRadius: "15px",
            zIndex: 100,
          }}
        />
        <motion.img
          src={RocketIcon}
          height={200}
          width={200}
          alt="rocket image"
          style={{ objectFit: "contain" }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            rotate: 360,
            x: [20, 20, 20, 20],
            y: [0, 100, 300, 500],
          }}
        />

        {/* <p className="" style={{ visibility: "hidden" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nobis
          nostrum ipsum quae culpa placeat. Iure voluptate qui itaque ipsa.
          Minima sunt voluptates at facere, quod recusandae. Ullam, eaque
          facilis? Perspiciatis deleniti facilis eos debitis vel vero quidem,
          autem ex incidunt pariatur enim possimus, ea libero! Suscipit ullam
          facilis, non eos reprehenderit, blanditiis nesciunt odio quibusdam in
          quas at id! Repudiandae reiciendis, nesciunt minus esse tempore et
          consequatur excepturi, reprehenderit quisquam assumenda ad aspernatur
          maxime non libero voluptates tenetur adipisci veritatis deleniti
          temporibus dolor! Voluptates quasi cum expedita non impedit? Molestiae
          nam placeat minima soluta maiores reiciendis quod debitis assumenda
          eligendi eius magnam nesciunt sunt, provident ipsum exercitationem?
          Quae laboriosam itaque ipsum dignissimos neque officiis expedita. A
          dolore blanditiis aliquid. Excepturi architecto animi, voluptatem nisi
          adipisci at repellendus tenetur hic cum provident quos sunt ratione
          doloribus dolor aliquam suscipit impedit ea rem laborum quaerat
          incidunt in facere porro! Hic, aliquid! Maiores blanditiis aliquam
          amet nobis accusantium sequi aut, inventore et neque minima in ullam
          mollitia. Rem ducimus vel explicabo aperiam, ea, harum exercitationem
          officiis eligendi commodi ratione cumque repellendus similique? A
          animi quis maxime accusantium asperiores eius commodi explicabo et vel
          est perspiciatis reprehenderit corporis, voluptates nam tenetur in
          officiis illo? Sapiente nobis temporibus eos ab alias eligendi enim
          et! Ipsa pariatur debitis error. Reprehenderit esse iusto deserunt,
          officiis nihil porro, mollitia aperiam dolor eligendi ipsam nulla
          atque unde, rem nostrum. Nesciunt, ratione? Adipisci iusto ipsa
          necessitatibus distinctio tenetur! Quam! Incidunt quasi iure animi,
          perspiciatis nam fugit vitae harum iusto sequi omnis vel totam beatae
          provident facilis est quos corporis neque nemo et doloribus reiciendis
          commodi eaque? Corporis, alias a! Sapiente minima, quam impedit
          debitis maxime suscipit, facere consectetur deleniti dicta sed modi
          velit sint reiciendis tempora commodi ducimus ea. Cupiditate dolore
          natus nesciunt illo veritatis architecto deleniti dignissimos eius!
          Sint facere enim ad. At nemo minus, labore placeat cumque, unde
          consequatur ipsam omnis soluta saepe ea dolorum facilis consequuntur
          dolore recusandae possimus dignissimos! Nihil et eos corporis ratione
          explicabo! Qui animi ducimus aut similique illum ratione dicta ad
          repellendus molestias vitae blanditiis molestiae laboriosam
          consequuntur reiciendis ullam adipisci, harum necessitatibus inventore
          ex, tenetur consectetur? Veniam id et voluptas voluptate. Cumque sint
          laboriosam dolor qui velit provident pariatur! Animi earum ex
          perspiciatis aliquam quo quam ducimus. Quisquam commodi inventore
          praesentium! Architecto magni aliquid soluta iure consequatur
          accusantium a dolorem qui! Adipisci, rem provident doloremque eius vel
          id inventore aliquid odit dolor nostrum deleniti quos amet ipsa
          corrupti obcaecati suscipit, commodi delectus alias, voluptatibus in
          labore? Ipsum minus voluptate unde mollitia! Totam velit atque
          consequuntur error vitae, magni sed amet voluptas animi hic
          reprehenderit sequi, doloremque aperiam quos ipsam, tempore assumenda
          vel repellat! Possimus excepturi sed ducimus, rerum vero molestias
          est. Voluptatem quod consectetur tempora ipsam temporibus vel
          molestias, voluptas, at dolores praesentium quo rerum saepe atque
          dolorum explicabo aliquam quam vero sunt ad. Doloribus vel minima esse
          sapiente laudantium nulla? Tempora repellat ullam fuga eaque quos
          molestias architecto, iusto autem quidem! Quos sed commodi ipsam
          soluta. Quod distinctio tempore laborum recusandae officia error ad,
          vel, voluptatum enim veniam totam quia. Cumque, enim! Eos hic ipsa
          possimus reiciendis vitae laudantium qui, alias doloribus
          necessitatibus impedit nemo architecto, iure accusamus dolorem dicta.
          Debitis optio dignissimos voluptatem maiores, rem assumenda alias sed
          illum. Nam alias eveniet libero excepturi ad natus! Libero sed velit
          incidunt, placeat molestiae pariatur exercitationem possimus est saepe
          rerum natus, debitis quas voluptas! Iste ratione, aperiam corporis sed
          perferendis aspernatur. Quod sint repellendus nam dignissimos minima
          mollitia, temporibus beatae enim eum officiis numquam suscipit
          excepturi dolor animi maiores perferendis nemo recusandae nisi
          sapiente vel pariatur nulla deserunt esse autem! Voluptas. Laudantium
          molestiae quas fugiat obcaecati fuga veritatis iusto, ad amet
          exercitationem deserunt quidem placeat animi, inventore dolorem totam
          tempore excepturi accusamus possimus dolor eum perspiciatis quibusdam
          blanditiis. Doloremque, ad temporibus! Dolores saepe quae assumenda,
          veritatis alias repudiandae tempore vero quas omnis illum, deleniti
          recusandae sunt porro ipsam mollitia quos consequatur reprehenderit
          impedit nulla velit maxime ut! Laborum rerum consequuntur eaque?
          Minima distinctio nam ipsum fugit recusandae quos repudiandae nostrum
          voluptatum hic ad magni, sint cupiditate. Vitae inventore dolorum,
          voluptate magnam pariatur voluptatem debitis doloremque quia natus ex,
          ipsum, expedita aperiam. Optio officia laudantium aliquid adipisci
          asperiores laborum ex iste itaque dolores autem animi corporis ratione
          id ut nihil veritatis delectus quod, natus, exercitationem blanditiis!
          Qui ullam omnis magnam asperiores voluptas? Ad, adipisci! Commodi
          incidunt a delectus doloribus, alias ipsa nisi debitis aliquam unde.
          Voluptatem enim voluptate similique maiores eius, quidem accusamus sed
          vero, officia, accusantium ullam alias voluptatibus quibusdam facilis.
          Qui officia ea aliquid earum velit numquam aperiam odit accusantium,
          unde, modi laborum consequatur aut quos accusamus voluptate sapiente.
          Facilis ab accusamus vitae, harum porro maiores eaque eius facere
          quod. Distinctio unde magnam earum adipisci iste. Laboriosam placeat
          vel, esse iure numquam deleniti ipsa veniam quod alias. Voluptates
          quod alias est repellendus impedit dolore, labore vero fuga vitae
          earum ipsam. Adipisci, aliquam et tenetur, possimus sit assumenda
          placeat, autem nihil laudantium quos sint natus est fugiat saepe
          expedita corporis quis. Quibusdam perspiciatis pariatur necessitatibus
          in ipsa velit sunt ipsum. Dolorum. Maiores reprehenderit aliquam
          eveniet facere omnis fugit amet cupiditate atque quas, laboriosam
          dicta velit aperiam temporibus. Nemo similique nulla exercitationem
          laborum esse, ad, sint deleniti, sunt quae deserunt eligendi
          laudantium! Veniam vero voluptate dolorum facere inventore harum hic,
          adipisci recusandae? Eligendi ratione maxime quis, molestiae alias
          pariatur quisquam in eaque explicabo voluptatem quam dolore
          repellendus mollitia autem. Deserunt, quia obcaecati? Veritatis
          expedita maiores nemo rerum eligendi repellendus veniam dolorum ab
          velit fugit atque quam necessitatibus, molestias porro harum voluptate
          optio nostrum nesciunt praesentium aliquam. Similique in sequi tempora
          quis sed. Corporis tenetur inventore magnam explicabo ad dolor dolorum
          mollitia, reiciendis ducimus doloremque molestiae pariatur ut, itaque
          velit quod culpa in quam rerum praesentium. Dolorem ad nihil cum quas
          iure ipsam? Eaque amet quas dolore laboriosam maiores cupiditate eum
          nulla nihil? Vero, molestiae enim? Autem nemo, deserunt cupiditate quo
          et harum laudantium itaque, dicta totam, quidem sequi. Fuga deserunt
          maiores nam! Odio totam quibusdam enim id odit natus nulla atque
          debitis ea eveniet minus at laboriosam pariatur ab, nostrum porro
          ratione maxime ex excepturi, quam iure quas, non aliquid? Aut, a.
          Laboriosam rerum praesentium ea ratione repudiandae adipisci eligendi
          repellendus, repellat aspernatur minus dolores deserunt id velit quia
          quam nostrum quisquam asperiores, enim, itaque omnis! Beatae quos
          magnam itaque necessitatibus minus. Dolores eaque ad possimus mollitia
          repellat aspernatur magni unde voluptates doloremque similique?
          Impedit veritatis beatae hic molestiae, atque harum! Earum incidunt
          quae aliquam sequi ut sit repudiandae ullam facilis non! Harum,
          aspernatur. Libero atque sit facere quas quaerat labore eos numquam
          quasi porro laboriosam delectus impedit aperiam eligendi incidunt
          optio veritatis, hic voluptas corrupti facilis illo! Iste repudiandae
          quasi numquam. Quod voluptatem soluta harum hic quas deleniti
          accusantium sint? Distinctio impedit tempore doloribus corrupti
          praesentium eius expedita, autem, ipsa, error unde ipsam quibusdam
          minus magnam! Officiis quidem nostrum officia omnis! Assumenda, autem
          eos enim saepe optio numquam iure est molestias veniam officia quidem
          inventore possimus quas ratione dolor? Nobis voluptas nulla veniam
          exercitationem a aliquam earum reprehenderit quidem facere accusamus.
          Expedita pariatur molestias illo iure eum. Facere molestiae pariatur
          nostrum eum ducimus, fuga odio repellendus ratione unde blanditiis quo
          adipisci nam atque nesciunt praesentium quia est debitis, sequi
          accusamus delectus. Quisquam omnis corporis, dicta dolorem facilis
          sequi velit numquam maiores, aliquid nam dignissimos! Aperiam, illum
          sunt obcaecati cupiditate accusantium inventore repellat minima.
          Distinctio laborum, vitae eos porro eum quibusdam odio? Voluptatem,
          facere atque numquam ea magnam odit voluptas velit, maiores nesciunt
          nihil omnis. Maxime quas odio iure vel non ullam sunt quisquam, illo
          hic adipisci tempore repellendus nemo, perspiciatis aliquid. Deleniti,
          eligendi ullam aliquam vel est, exercitationem, molestiae consequuntur
          id aliquid assumenda nulla eveniet error minima. Possimus magni at
          cupiditate, tenetur et nulla dignissimos neque quidem, deleniti
          tempore pariatur numquam. Quas quam molestias nam cupiditate itaque
          atque, accusantium odio. Iste nihil obcaecati, distinctio officiis
          molestiae illum doloribus quas. Architecto laborum voluptate ad odio
          officiis, quos debitis voluptatum accusamus aspernatur. Officia.
          Soluta reprehenderit laborum quam dolores dolorem doloremque,
          inventore voluptate nobis non? Impedit officiis sint nobis, enim esse
          possimus, minima vel porro unde ex error quis accusantium maiores
          distinctio expedita labore? Possimus et hic, distinctio saepe veniam
          est consequuntur recusandae, exercitationem aut nostrum dolor! Alias
          ratione praesentium saepe! Quis quaerat distinctio sed hic rem
          provident commodi, ducimus sequi neque, quo id. Placeat obcaecati
          facilis ab amet numquam, ea atque nulla magni esse nemo suscipit, ut
          aut perspiciatis laudantium architecto, iusto id quo quas deleniti
          aspernatur cumque reiciendis. Maxime impedit vitae nostrum. Accusamus
          ea, ipsa ipsam distinctio blanditiis repellendus obcaecati,
          repudiandae consequatur minima vel optio? Quis voluptatum laudantium
          suscipit. Earum officia amet doloribus, quidem cumque perspiciatis
          facere ratione et odit commodi optio! Numquam vero obcaecati rerum
          deleniti nihil blanditiis, hic exercitationem labore iste minus
          laudantium tempora! Maxime sequi dolores ab, sed quibusdam nostrum
          tenetur sit! Quibusdam fugit ullam nisi natus numquam sed. Porro
          commodi consequuntur rerum nihil! Eum numquam provident consequuntur
          incidunt voluptas voluptatum itaque, repudiandae nemo pariatur
          explicabo illo reprehenderit modi facilis, ullam minima. Numquam
          assumenda delectus voluptatem cum quidem deserunt. Facilis facere
          similique culpa consectetur quia eligendi, beatae saepe quaerat, amet
          non ut aut tenetur ducimus quibusdam cumque doloremque voluptates
          labore cupiditate modi, animi placeat eveniet? Reprehenderit nihil
          voluptatum eum? Repudiandae maiores, laudantium, labore illo,
          perspiciatis odio saepe nisi quaerat ipsam consequatur libero officiis
          dolore voluptates qui sequi eveniet voluptatum pariatur similique eum
          ad repellat quo. Accusantium alias asperiores ex! Iure recusandae
          debitis dolor, expedita alias, minima aperiam veritatis placeat
          molestiae labore ea reprehenderit fugiat sequi eius eveniet ab
          assumenda eos laboriosam! Voluptas, cupiditate. Quas autem non ducimus
          voluptas soluta? Corrupti mollitia odit nisi. Necessitatibus porro
          natus odio ratione tenetur laboriosam possimus sit temporibus
          perspiciatis quasi tempore sunt sapiente adipisci qui id, vel nostrum
          dicta culpa soluta iusto maiores exercitationem. Tenetur voluptates
          beatae, sit facilis id voluptatibus inventore deserunt dolore hic. Sit
          esse possimus totam optio. Facilis quas ratione aliquid optio iste
          assumenda quod laboriosam consequatur? Nesciunt cumque quod rem? Ad
          omnis amet sapiente accusamus ratione tempora vel totam voluptate
          ipsam est cumque sequi atque debitis ipsum natus incidunt perspiciatis
          quas, officia architecto, perferendis tenetur? Laudantium eos beatae
          facere voluptatum. Consectetur dolore tempore nulla. Pariatur, dolor,
          tempora quisquam, ad culpa voluptatem itaque provident expedita ipsum
          commodi at. Eaque possimus repellat animi, nostrum eos maxime
          accusamus praesentium sapiente! Odio, vero fugit. Dolore, dolorem ea
          ipsam eum ab, perferendis, architecto est animi soluta temporibus quis
          non ratione officia natus. Quos id eius officiis, odio veniam repellat
          suscipit, maxime deserunt, consequuntur expedita eligendi! Ab saepe
          provident vel quis temporibus quos quod dignissimos officia fugiat
          ipsam eius, voluptate recusandae voluptates facere. Veniam assumenda
          odio nisi repellat eum. Officia dolores ipsa pariatur tempora
          molestiae perspiciatis. Illum inventore cupiditate voluptatibus velit
          ex iure dolorem rerum expedita laborum consequuntur! Voluptatum, eius
          quae harum libero laboriosam numquam hic fugit eligendi dolorem nobis,
          architecto aut sit recusandae? Ipsum, consectetur. Quibusdam, quidem
          voluptate. Temporibus, deleniti? Impedit et, ad incidunt minus eaque
          rerum reprehenderit accusantium assumenda sint dicta dolor
          exercitationem. Nisi magnam ad ipsam quis excepturi officia atque enim
          illum dolor? Eum magnam assumenda alias quis ipsam inventore pariatur
          voluptatibus aut nisi dolore, nemo officiis? Sequi quaerat doloremque
          vel, commodi quis, modi illum eum unde rerum recusandae in nostrum
          temporibus molestias. Dolore nam error at assumenda accusantium
          corrupti ad dolorum, placeat tempore consequatur laboriosam magnam!
          Est quae similique itaque aliquam illum repellendus necessitatibus
          suscipit qui. Error hic itaque facilis culpa cupiditate. Dolorum
          exercitationem nihil, quia voluptatum reiciendis impedit quas
          dignissimos labore, placeat iusto doloremque dolorem ullam. Ratione,
          voluptatibus repellendus in tempore quae ipsam fugiat? Incidunt
          aliquid neque laboriosam tempore natus omnis! Non eos, id corrupti
          unde doloremque animi doloribus? Voluptate dignissimos similique
          sequi? Illo repellat error eum reprehenderit cumque, beatae modi,
          molestiae optio iste eius iusto quae a quos voluptate voluptatem.
          Assumenda minus autem tempore amet aut dignissimos unde voluptatum
          nulla expedita, corporis cupiditate reprehenderit porro illum, a
          dolorem aspernatur eum voluptatibus. Numquam minima quos qui ab
          asperiores sed recusandae repellat. Illum rem impedit ad dolor eum
          harum quo, expedita, sunt doloribus provident culpa totam adipisci id.
          Dolores sed iste impedit, ullam corrupti atque porro architecto
          aliquam eum corporis eligendi facilis. Cum soluta tempore veniam aut
          nobis illum asperiores vero, veritatis omnis expedita explicabo
          officia voluptates ipsum, quae totam quaerat magnam possimus hic
          porro, quis ea minima culpa deserunt. Blanditiis, inventore?
          Exercitationem magnam quos quis earum. Quisquam necessitatibus nam
          consequuntur provident consectetur, incidunt quis, voluptate,
          obcaecati fuga atque molestias doloribus vel officia adipisci
          doloremque. Temporibus earum consequatur nam laudantium, iure commodi.
          Pariatur doloremque ipsam debitis? Optio ad voluptas dolore, debitis
          fuga, repellat excepturi nihil error recusandae facilis reiciendis
          iusto modi consequatur minima beatae? Ratione eius nostrum rerum velit
          assumenda cumque distinctio. Laboriosam facilis culpa maxime beatae
          possimus voluptate provident optio corporis consequatur pariatur, sint
          illo, accusantium dolores ipsum maiores, sed asperiores nisi quos
          quasi obcaecati magnam veritatis dolorem ad. Similique, soluta.
          Laborum dolorem dolorum repellendus, nostrum aperiam ut ratione quia
          nam saepe impedit quo. Aut sint consectetur ipsam suscipit, debitis
          blanditiis eveniet reprehenderit iure inventore ipsum, exercitationem
          ea officiis non distinctio! Illum vel, tempora earum eius nulla quos,
          porro ut praesentium quaerat labore voluptate. Autem dignissimos ullam
          iure? Aperiam fugit rerum, officiis pariatur quas aliquid quibusdam et
          tempora, nostrum voluptate natus! Itaque, iste sint alias aperiam eius
          sunt. Fugit amet doloribus id tempora libero maxime quia quae, aperiam
          distinctio, esse incidunt necessitatibus, omnis cupiditate sapiente
          harum error molestiae qui. Cupiditate, dolor. Debitis, sunt quae
          obcaecati laudantium, molestiae dicta, quas nisi at minima mollitia
          atque quisquam possimus blanditiis. Neque sed nihil corrupti
          temporibus qui porro dicta cumque blanditiis autem debitis. Itaque,
          nisi! Consectetur obcaecati iure nostrum asperiores reprehenderit nam
          molestias quaerat aliquid minus quibusdam? Nisi, accusantium optio
          laborum similique architecto exercitationem. Voluptas natus vero totam
          officia officiis tempore delectus voluptatibus eligendi enim?
          Doloremque voluptatibus, sunt suscipit odit officiis iure reiciendis
          accusamus tempore nostrum illum nulla laborum modi recusandae minima!
          Officiis, tempore vitae. Totam ut obcaecati maiores quis ullam quo
          consequatur. Deserunt, necessitatibus? Vitae reprehenderit dicta est
          placeat quaerat non et commodi minima suscipit illum tempora quisquam,
          nesciunt ad voluptates sunt quam? Recusandae dignissimos vero ab eius
          architecto. Nihil iure nobis magnam ullam. Ratione explicabo soluta,
          voluptatum reiciendis dolores odit cum repellendus, quod qui, dolorem
          asperiores excepturi similique provident. Similique facere debitis
          repellendus eum maxime rerum culpa. Repellat soluta nam explicabo
          aperiam veritatis! Nemo iste quasi repellendus minima laudantium
          veritatis repudiandae tempore, dolores optio culpa odit et
          reprehenderit laboriosam, soluta illo quos deserunt, vero recusandae
          ab placeat voluptates! Quis eaque inventore omnis ut. Voluptas,
          quisquam repellat? Sed modi qui dolorem quibusdam, tenetur atque
          officiis distinctio, cumque, natus nam autem cupiditate ratione iure
          sapiente reiciendis? Accusantium ullam, ipsam possimus asperiores
          ducimus eos praesentium repellendus. Perspiciatis, facere quisquam
          beatae commodi dolor eveniet perferendis quod autem dignissimos
          officia dolores, repudiandae vitae quia, ab reprehenderit. Quia
          perferendis et quas rem architecto vero excepturi dolore veritatis
          veniam autem. Facilis, veniam odio ab sunt error et ullam natus
          exercitationem! Perspiciatis quisquam corporis culpa. Quia accusantium
          amet facere voluptates maiores ex quod nostrum magnam accusamus
          dignissimos? Eveniet quas labore est. Quibusdam reprehenderit, sunt
          dicta laborum itaque beatae est minus doloribus eaque ducimus
          asperiores corporis velit perferendis aut, deleniti accusantium,
          mollitia inventore aspernatur numquam voluptas ipsum ad? Reprehenderit
          maxime qui ut! Repellat voluptate possimus quam soluta molestiae
          labore, architecto dolor impedit, adipisci facere tempora similique
          expedita natus officia doloremque unde accusamus cupiditate cumque
          odio qui hic inventore asperiores et ducimus. Velit! Doloremque
          cupiditate eaque possimus inventore odit repellendus deserunt at,
          maiores minus cumque tempora eveniet culpa, sit reprehenderit
          aspernatur magni ducimus quasi, vel accusantium nisi ea! Mollitia,
          molestias dolore. Inventore, minus. Laborum, vero! Consequatur dolorem
          incidunt provident asperiores, aspernatur exercitationem, quibusdam
          amet, iusto corrupti odit expedita cumque fugit excepturi. Libero in
          nostrum mollitia. Dicta quisquam quis fugiat, enim commodi
          perspiciatis obcaecati? Incidunt, ratione provident est corrupti hic
          praesentium dolorum nam natus numquam quae error quisquam iure sed
          ipsum, corporis exercitationem magni harum. Odio laborum similique
          impedit cupiditate. Excepturi error molestiae maiores. Cumque veniam
          tenetur incidunt ipsam quibusdam iste hic culpa, sapiente, alias ea
          ut! Ratione explicabo veritatis sequi sunt. Vel quasi itaque dolores
          quisquam a tempore, eius ullam! Magnam, rem cum. Nulla nam unde vero.
          At accusamus non totam error! Dignissimos fugiat beatae, aliquam
          dolore, ratione non eum rem quos sit voluptates repudiandae. Minima
          explicabo beatae, voluptates delectus harum odio corporis! Pariatur
          sapiente asperiores explicabo consequatur repudiandae! Voluptatibus
          excepturi fugiat quidem maiores dolorem corporis sequi officia ex hic
          earum, similique repellat eum quia ipsa non vero! Eos facilis laborum
          quasi dolore. Rerum dolorem laudantium dolores mollitia excepturi!
          Corrupti sit quo consequatur hic impedit earum, aperiam quos iure aut
          at veritatis, neque rerum commodi architecto tempora ipsum incidunt
          repudiandae cumque accusamus tempore. Corporis, nesciunt beatae atque
          doloribus velit accusantium sequi libero. Cum eaque quidem officia
          autem corrupti ab illo voluptates, esse ipsa iure aperiam ducimus
          adipisci ratione blanditiis asperiores quo. Assumenda, quibusdam.
          Laboriosam, ipsum tenetur aliquid minus nihil voluptates autem eius
          quas ipsam corporis veniam aliquam. Ducimus odit doloremque et nisi
          amet mollitia quis, dignissimos dolore? Esse deleniti earum dolores id
          magnam? Impedit blanditiis perferendis similique beatae dolore
          adipisci vitae, quas unde inventore dolor, error ratione iure,
          repellendus eaque minus aut iusto ea velit. Optio blanditiis
          dignissimos minima aut esse ipsa ipsam. Omnis aspernatur perferendis
          doloremque eaque laudantium amet neque voluptatum sed voluptatibus?
          Quis optio possimus sequi expedita error labore aperiam ducimus,
          perferendis quia. Quos obcaecati sit omnis nemo, ab quidem doloremque?
          Sapiente, amet minima. Iste recusandae eveniet odit, asperiores nemo
          nulla quibusdam harum similique, eum illo adipisci dicta quasi
          inventore quae dolorem mollitia ab. Voluptatibus cupiditate, iure
          doloribus harum ut inventore. Libero deleniti harum laboriosam
          temporibus optio aliquam, fugit, distinctio earum fugiat quas odit
          autem hic molestiae quasi quibusdam delectus tenetur. Ipsum omnis
          culpa et veritatis architecto exercitationem repellendus ducimus non.
          Mollitia ipsam ea perspiciatis placeat. Ullam quibusdam labore ut id,
          inventore, aut molestias repellat quia culpa, provident minima
          asperiores sit eius quam corporis dolor! Quisquam nisi obcaecati
          eveniet reiciendis! Veritatis. Vero laboriosam voluptatem sit maxime
          hic odio obcaecati non quaerat! Iusto aut dolores earum beatae quas
          illo error praesentium repudiandae! Esse pariatur numquam nobis
          facilis quos minus maiores iusto asperiores.
        </p> */}
      </div>
    </div>
  );
};

export default Animation;

// <div className="animation--wrapper" style={{ position: "relative" }}>
//       <div style={{display:'flex', gap:"15rem"}}>
//         <motion.button
//           className="animation--button"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{
//             duration: 0.3,
//             scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
//           }}
//           whileHover={{
//             scale: 1.2,
//             backgroundColor: "red",
//           }}
//           whileTap={{
//             rotate: "360deg",
//             translateX: 500,
//           }}
//         >
//           Click me
//         </motion.button>
//         <Rectangle />
//       </div>
//       <motion.div
//         style={{
//           scaleX: scrollYProgress,
//           background: "green",
//           height: "5px",
//           width: "100vw",
//           position: "fixed",
//           top: 0,
//           left: 0,
//           transformOrigin: "left",
//           borderRadius: "15px",
//           zIndex: 100,
//         }}
//       />
//       <motion.div
//         className="box--1"
//         animate={{
//           x: [0, 600, 1200, 600, 0],
//           y: [200, 0, 200, 500, 200],
//           rotate: 360,
//         }}
//         transition={{ delay: 2, duration: 3, ease: "anticipate", repeat: 2 }}
//       >
//         <motion.div
//           className="box--1--child"
//           animate={{
//             rotate: 360,
//             x: [0, 100, 100, 0, 0],
//             y: [0, 0, 100, 100, 0],
//           }}
//           transition={{
//             delay: 1,
//             duration: 1.5,
//             ease: "circIn",
//             repeat: Infinity,
//           }}
//         ></motion.div>
//       </motion.div>

//       <motion.div
//         drag
//         dragConstraints={{ left: 0, top: 0 }}
//         whileDrag={{ scale: 1.1, cursor: "pointer" }}
//         className="draggable--box"
//       >
//         Drag me
//       </motion.div>

//       <PathDrawing />

//       <SharedLayoutAnimation />
//     </div>
