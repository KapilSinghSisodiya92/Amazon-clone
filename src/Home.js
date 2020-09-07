import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        alt=""
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB406828669_.jpg"
      />
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
