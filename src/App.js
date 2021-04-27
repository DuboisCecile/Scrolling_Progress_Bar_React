import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const topScrollingPosition = document.documentElement.scrollTop;
    const hiddenHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollTop((topScrollingPosition / hiddenHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="main-content">
      <div className="progress-bar-background">
        <div className="progress-bar" style={{ width: `${scrollTop}%` }}></div>
      </div>
      <h1>Scrollons...</h1>
      <div className="block-img-text">
        <img
          src="https://picsum.photos/200/300?random=1"
          alt="random illustration"
        />
        <div className="lorem-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            iaculis lorem enim, in pretium libero vehicula et. Nulla consequat
            arcu et euismod luctus. Duis facilisis, nulla et tristique sagittis,
            nibh augue egestas neque, ut congue purus nulla nec nulla. Nam
            pulvinar egestas tortor sed ullamcorper. Proin imperdiet, nisi eu
            dictum cursus, urna justo eleifend sapien, eget congue mi tortor a
            nisi. Maecenas lacinia gravida mi, id sodales nibh faucibus sed.
            Suspendisse malesuada ex aliquet aliquet efficitur. Sed feugiat
            hendrerit molestie. Morbi eu lectus sit amet erat finibus aliquet
            sed at leo. Duis iaculis metus sed libero aliquam, a malesuada risus
            vulputate. Proin sed lectus condimentum, tristique augue vel,
            iaculis libero.
          </p>
          <p>
            Vivamus bibendum est in commodo placerat. Sed consectetur, dui nec
            venenatis dapibus, purus enim fringilla ante, sed commodo justo enim
            at mi. Donec sit amet facilisis velit, sit amet faucibus nibh. Duis
            vulputate, mauris in ornare ornare, est ante volutpat enim, eu
            posuere nulla ipsum sit amet odio. Sed efficitur diam eu est
            pellentesque hendrerit. Integer rhoncus feugiat ante, vitae porta
            lectus tincidunt quis. Ut ut porta sem. Curabitur faucibus nisi
            felis, quis tempus est iaculis nec.
          </p>
          <p>
            Aenean erat massa, commodo a augue quis, elementum placerat orci. In
            volutpat magna eu quam accumsan sollicitudin. Proin mollis magna
            eget dui consectetur, vel consequat tortor dignissim. Fusce
            tincidunt commodo sapien eu faucibus. Fusce consectetur bibendum
            vehicula. Nullam neque enim, faucibus a augue ac, euismod suscipit
            turpis. Nulla pretium ligula vitae dui euismod, quis cursus tortor
            faucibus.
          </p>
          <p>
            Praesent est risus, porttitor sit amet ex at, facilisis bibendum
            augue. Vestibulum varius velit quis interdum vulputate. In eu sapien
            quis tellus porta pretium facilisis eu magna. Etiam pharetra dolor
            elementum laoreet sagittis. Sed ullamcorper mauris pharetra lectus
            vulputate, et consectetur orci venenatis. Sed in blandit tellus.
            Quisque gravida faucibus massa rutrum pellentesque. Sed elementum et
            quam vitae pharetra. Quisque eu diam vitae velit ullamcorper
            egestas. Donec id ex non nisl condimentum interdum eu non elit.
            Phasellus eu tincidunt erat. Ut in luctus mi, eu pretium dolor.
            Fusce accumsan consectetur velit, quis vehicula neque mollis non.
            Sed rutrum volutpat tristique.
          </p>
          <p>
            Morbi in mauris quis lacus posuere auctor non et enim. Morbi et
            mattis libero. Sed accumsan enim vitae gravida luctus. Etiam aliquet
            velit nec velit feugiat, vel auctor nisi hendrerit. Donec quis
            placerat quam. In vitae ante nec eros rhoncus congue at eget augue.
            Quisque nisi elit, ultrices nec ullamcorper eget, iaculis interdum
            metus. Nulla sodales odio non tincidunt dictum. In dignissim
            tincidunt posuere. Integer vulputate ac diam vel rhoncus.
          </p>
        </div>
      </div>
      <div className="block-img-text">
        <div className="lorem-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            iaculis lorem enim, in pretium libero vehicula et. Nulla consequat
            arcu et euismod luctus. Duis facilisis, nulla et tristique sagittis,
            nibh augue egestas neque, ut congue purus nulla nec nulla. Nam
            pulvinar egestas tortor sed ullamcorper. Proin imperdiet, nisi eu
            dictum cursus, urna justo eleifend sapien, eget congue mi tortor a
            nisi. Maecenas lacinia gravida mi, id sodales nibh faucibus sed.
            Suspendisse malesuada ex aliquet aliquet efficitur. Sed feugiat
            hendrerit molestie. Morbi eu lectus sit amet erat finibus aliquet
            sed at leo. Duis iaculis metus sed libero aliquam, a malesuada risus
            vulputate. Proin sed lectus condimentum, tristique augue vel,
            iaculis libero.
          </p>
          <p>
            Vivamus bibendum est in commodo placerat. Sed consectetur, dui nec
            venenatis dapibus, purus enim fringilla ante, sed commodo justo enim
            at mi. Donec sit amet facilisis velit, sit amet faucibus nibh. Duis
            vulputate, mauris in ornare ornare, est ante volutpat enim, eu
            posuere nulla ipsum sit amet odio. Sed efficitur diam eu est
            pellentesque hendrerit. Integer rhoncus feugiat ante, vitae porta
            lectus tincidunt quis. Ut ut porta sem. Curabitur faucibus nisi
            felis, quis tempus est iaculis nec.
          </p>
          <p>
            Aenean erat massa, commodo a augue quis, elementum placerat orci. In
            volutpat magna eu quam accumsan sollicitudin. Proin mollis magna
            eget dui consectetur, vel consequat tortor dignissim. Fusce
            tincidunt commodo sapien eu faucibus. Fusce consectetur bibendum
            vehicula. Nullam neque enim, faucibus a augue ac, euismod suscipit
            turpis. Nulla pretium ligula vitae dui euismod, quis cursus tortor
            faucibus.
          </p>
          <p>
            Praesent est risus, porttitor sit amet ex at, facilisis bibendum
            augue. Vestibulum varius velit quis interdum vulputate. In eu sapien
            quis tellus porta pretium facilisis eu magna. Etiam pharetra dolor
            elementum laoreet sagittis. Sed ullamcorper mauris pharetra lectus
            vulputate, et consectetur orci venenatis. Sed in blandit tellus.
            Quisque gravida faucibus massa rutrum pellentesque. Sed elementum et
            quam vitae pharetra. Quisque eu diam vitae velit ullamcorper
            egestas. Donec id ex non nisl condimentum interdum eu non elit.
            Phasellus eu tincidunt erat. Ut in luctus mi, eu pretium dolor.
            Fusce accumsan consectetur velit, quis vehicula neque mollis non.
            Sed rutrum volutpat tristique.
          </p>
          <p>
            Morbi in mauris quis lacus posuere auctor non et enim. Morbi et
            mattis libero. Sed accumsan enim vitae gravida luctus. Etiam aliquet
            velit nec velit feugiat, vel auctor nisi hendrerit. Donec quis
            placerat quam. In vitae ante nec eros rhoncus congue at eget augue.
            Quisque nisi elit, ultrices nec ullamcorper eget, iaculis interdum
            metus. Nulla sodales odio non tincidunt dictum. In dignissim
            tincidunt posuere. Integer vulputate ac diam vel rhoncus.
          </p>
        </div>
        <img
          src="https://picsum.photos/200/300?random=2"
          alt="random illustration"
        />
      </div>
      <div className="block-img-text">
        <img
          src="https://picsum.photos/200/300?random=3"
          alt="random illustration"
        />
        <div className="lorem-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            iaculis lorem enim, in pretium libero vehicula et. Nulla consequat
            arcu et euismod luctus. Duis facilisis, nulla et tristique sagittis,
            nibh augue egestas neque, ut congue purus nulla nec nulla. Nam
            pulvinar egestas tortor sed ullamcorper. Proin imperdiet, nisi eu
            dictum cursus, urna justo eleifend sapien, eget congue mi tortor a
            nisi. Maecenas lacinia gravida mi, id sodales nibh faucibus sed.
            Suspendisse malesuada ex aliquet aliquet efficitur. Sed feugiat
            hendrerit molestie. Morbi eu lectus sit amet erat finibus aliquet
            sed at leo. Duis iaculis metus sed libero aliquam, a malesuada risus
            vulputate. Proin sed lectus condimentum, tristique augue vel,
            iaculis libero.
          </p>
          <p>
            Vivamus bibendum est in commodo placerat. Sed consectetur, dui nec
            venenatis dapibus, purus enim fringilla ante, sed commodo justo enim
            at mi. Donec sit amet facilisis velit, sit amet faucibus nibh. Duis
            vulputate, mauris in ornare ornare, est ante volutpat enim, eu
            posuere nulla ipsum sit amet odio. Sed efficitur diam eu est
            pellentesque hendrerit. Integer rhoncus feugiat ante, vitae porta
            lectus tincidunt quis. Ut ut porta sem. Curabitur faucibus nisi
            felis, quis tempus est iaculis nec.
          </p>
          <p>
            Aenean erat massa, commodo a augue quis, elementum placerat orci. In
            volutpat magna eu quam accumsan sollicitudin. Proin mollis magna
            eget dui consectetur, vel consequat tortor dignissim. Fusce
            tincidunt commodo sapien eu faucibus. Fusce consectetur bibendum
            vehicula. Nullam neque enim, faucibus a augue ac, euismod suscipit
            turpis. Nulla pretium ligula vitae dui euismod, quis cursus tortor
            faucibus.
          </p>
          <p>
            Praesent est risus, porttitor sit amet ex at, facilisis bibendum
            augue. Vestibulum varius velit quis interdum vulputate. In eu sapien
            quis tellus porta pretium facilisis eu magna. Etiam pharetra dolor
            elementum laoreet sagittis. Sed ullamcorper mauris pharetra lectus
            vulputate, et consectetur orci venenatis. Sed in blandit tellus.
            Quisque gravida faucibus massa rutrum pellentesque. Sed elementum et
            quam vitae pharetra. Quisque eu diam vitae velit ullamcorper
            egestas. Donec id ex non nisl condimentum interdum eu non elit.
            Phasellus eu tincidunt erat. Ut in luctus mi, eu pretium dolor.
            Fusce accumsan consectetur velit, quis vehicula neque mollis non.
            Sed rutrum volutpat tristique.
          </p>
          <p>
            Morbi in mauris quis lacus posuere auctor non et enim. Morbi et
            mattis libero. Sed accumsan enim vitae gravida luctus. Etiam aliquet
            velit nec velit feugiat, vel auctor nisi hendrerit. Donec quis
            placerat quam. In vitae ante nec eros rhoncus congue at eget augue.
            Quisque nisi elit, ultrices nec ullamcorper eget, iaculis interdum
            metus. Nulla sodales odio non tincidunt dictum. In dignissim
            tincidunt posuere. Integer vulputate ac diam vel rhoncus.
          </p>
        </div>
      </div>
      <div className="block-img-text">
        <div className="lorem-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            iaculis lorem enim, in pretium libero vehicula et. Nulla consequat
            arcu et euismod luctus. Duis facilisis, nulla et tristique sagittis,
            nibh augue egestas neque, ut congue purus nulla nec nulla. Nam
            pulvinar egestas tortor sed ullamcorper. Proin imperdiet, nisi eu
            dictum cursus, urna justo eleifend sapien, eget congue mi tortor a
            nisi. Maecenas lacinia gravida mi, id sodales nibh faucibus sed.
            Suspendisse malesuada ex aliquet aliquet efficitur. Sed feugiat
            hendrerit molestie. Morbi eu lectus sit amet erat finibus aliquet
            sed at leo. Duis iaculis metus sed libero aliquam, a malesuada risus
            vulputate. Proin sed lectus condimentum, tristique augue vel,
            iaculis libero.
          </p>
          <p>
            Vivamus bibendum est in commodo placerat. Sed consectetur, dui nec
            venenatis dapibus, purus enim fringilla ante, sed commodo justo enim
            at mi. Donec sit amet facilisis velit, sit amet faucibus nibh. Duis
            vulputate, mauris in ornare ornare, est ante volutpat enim, eu
            posuere nulla ipsum sit amet odio. Sed efficitur diam eu est
            pellentesque hendrerit. Integer rhoncus feugiat ante, vitae porta
            lectus tincidunt quis. Ut ut porta sem. Curabitur faucibus nisi
            felis, quis tempus est iaculis nec.
          </p>
          <p>
            Aenean erat massa, commodo a augue quis, elementum placerat orci. In
            volutpat magna eu quam accumsan sollicitudin. Proin mollis magna
            eget dui consectetur, vel consequat tortor dignissim. Fusce
            tincidunt commodo sapien eu faucibus. Fusce consectetur bibendum
            vehicula. Nullam neque enim, faucibus a augue ac, euismod suscipit
            turpis. Nulla pretium ligula vitae dui euismod, quis cursus tortor
            faucibus.
          </p>
          <p>
            Praesent est risus, porttitor sit amet ex at, facilisis bibendum
            augue. Vestibulum varius velit quis interdum vulputate. In eu sapien
            quis tellus porta pretium facilisis eu magna. Etiam pharetra dolor
            elementum laoreet sagittis. Sed ullamcorper mauris pharetra lectus
            vulputate, et consectetur orci venenatis. Sed in blandit tellus.
            Quisque gravida faucibus massa rutrum pellentesque. Sed elementum et
            quam vitae pharetra. Quisque eu diam vitae velit ullamcorper
            egestas. Donec id ex non nisl condimentum interdum eu non elit.
            Phasellus eu tincidunt erat. Ut in luctus mi, eu pretium dolor.
            Fusce accumsan consectetur velit, quis vehicula neque mollis non.
            Sed rutrum volutpat tristique.
          </p>
          <p>
            Morbi in mauris quis lacus posuere auctor non et enim. Morbi et
            mattis libero. Sed accumsan enim vitae gravida luctus. Etiam aliquet
            velit nec velit feugiat, vel auctor nisi hendrerit. Donec quis
            placerat quam. In vitae ante nec eros rhoncus congue at eget augue.
            Quisque nisi elit, ultrices nec ullamcorper eget, iaculis interdum
            metus. Nulla sodales odio non tincidunt dictum. In dignissim
            tincidunt posuere. Integer vulputate ac diam vel rhoncus.
          </p>
        </div>
        <img
          src="https://picsum.photos/200/300?random=4"
          alt="random illustration"
        />
      </div>
    </div>
  );
}
