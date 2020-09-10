import React from "react";
import "./Home.css";
import Slider from "./Slider";
import Product from "./Product";
import Images from "./Images";
import MultiProduct from "./MultiProduct";
import SignIn from "./SignIn";
import Deals from "./Deals";
import TopTrand from "./TopTrand";
import SingleProduct from "./SingleProduct";

function Home() {
  return (
    <div className="home">
      <Slider slides={Images} autoPlay={true} />
      {/* <img
        alt=""
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB406828669_.jpg"
      /> */}
      <div className="home__row">
        <MultiProduct
          title="Top picks for your home"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_372x232_1._SY232_CB433700930_.jpg"
          title1="Dishwasher"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_QC_Washing-machine_372x232._SY232_CB432544819_.jpg"
          title2="Washing Machine"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/April/MSO/DCQC_TV_372x232_5._SY232_CB434051405_.jpg"
          title3="Television"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Ref/Ref_graphic_desktop_QC_372x232._SY232_CB429420827_.png"
          title4="Refrigerators"
        />
        <MultiProduct
          title="Donations, recharges, bills, medicines & more"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/Covid/Donation_372x232._SY232_CB435243930_.jpg"
          title1="Covid-19 Donation"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Ankit/gw/desktopcard/recharge_372_232._SY232_CB448565146_.jpg"
          title2="Mobile Recharges"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Ankit/gw/desktopcard/bills_372_232._SY232_CB448565146_.jpg"
          title3="Bills"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonPay/Medicines_Icon_372x232_R._SY232_CB420120618_.jpg"
          title4="Medicines"
        />
        <MultiProduct
          title="Home essentials | Amazon Brands & more"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_372x232._SY232_CB430773130_.jpg"
          title1="Bedsheets, currains & more"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_372x232._SY232_CB430773125_.jpg"
          title2="Cloth orgnizer, boxes & more"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_372x232._SY232_CB430773125_.jpg"
          title3="Wall stickers & clocks"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_372x232._SY232_CB430773130_.jpg"
          title4="Smart bulb & string lights"
        />
        <SignIn />
      </div>

      <div className="home__row ">
        <Deals />
      </div>

      <div className="home__row ">
        <TopTrand />
      </div>

      <div className="home__row">
        <MultiProduct
          title="Donations, recharges, bills, medicines & more"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/MSO_QC_R1._SY232_CB445377558_.jpg"
          title1="Smart bulb"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/111b._SY232_CB445137957_.jpg"
          title2="Echo devices"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/222b._SY232_CB445137956_.jpg"
          title3="Smart plug"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/MSO_QC_1x_R4._SY116_CB445377558_.jpg"
          title4="Fire TV stick 4k"
        />
        <MultiProduct
          title="For your pets"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Dogs_2X._SY232_CB448750760_.jpg"
          title1="Dog Supplies"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Cats_2X._SY232_CB448750760_.jpg"
          title2="Cat Supplies"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Aquatics_2X._SY232_CB448750761_.jpg"
          title3="Aquatics Supplies"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Birds_2X._SY232_CB448750760_.jpg"
          title4="Bird Supplies"
        />
        <MultiProduct
          title="Unique finds from Indian startups"
          image1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Gateway/July/MASK_372X232._SY232_CB428862092_.jpg"
          title1="Masks, sanitizers & more"
          image2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Gateway/July/Immunity_boosters_372X232._SY232_CB428840297_.jpg"
          title2="Ayurvedic essentials"
          image3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Gateway/July/372X232._SY232_CB428840291_.jpg"
          title3="Healthy snacks"
          image4="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/Gateway/Aug/372x232_logo._SY232_CB407804005_.jpg"
          title4="Amazon launchpad"
        />
        <SingleProduct title="Editor's corner | Handpicked eBooks for the reader in you" />
      </div>

      <div className="home__row ">
        <Product
          id="123cd23"
          title="DMR 3 kg Portable Mini Washing Machine with Dryer Basket (DMR 30-1208, Blue)"
          price={40.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/51tCRNMG+pL._AC_UY500_FMwebp_QL65_.jpg"
        />
        <Product
          id="12988323"
          title="The Notebook: The love story to end all love stories and millions of other books are available for instant access."
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51YC+iZHW0L.__AC_SY400_.jpg"
        />
      </div>

      <div className="home__row ">
        <Product
          id="1238823"
          title="Cello Grind N Mix Ertiga 500-Watt Juicer Mixer Grinder with 3 Jars (Blue)"
          price={49.96}
          rating={1}
          image="https://m.media-amazon.com/images/I/61ZCyRCvFtL._AC_UY545_FMwebp_QL65_.jpg"
        />
        <Product
          id="1232543"
          title="American Tourister Jet 50 cms Brown Casual Backpack (FE0 (0) 03 002)"
          price={21.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/71tUelBDWHL._AC_UL800_FMwebp_QL65_.jpg"
        />
        <Product
          id="12323"
          title="Amazon Brand - Solimo 12-inch Wall Clock - Classic Roulette (Silent Movement, Black Frame)"
          price={41.96}
          rating={2}
          image="https://m.media-amazon.com/images/I/81XEPquUw3L._AC_UL800_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row ">
        <Product
          id="123cd23"
          title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
          price={40.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UL800_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
