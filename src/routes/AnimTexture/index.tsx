import { component$, useStore, } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const store = useStore({
      frames: [] as any[],
      textureName: ''
  });

  return (
    <section class="flex mx-auto max-w-6xl px-6 items-center justify-center min-h-[calc(100lvh-80px)]">
      <div class="mt-10 min-h-[60px] p-20">
        <h1 class="font-bold tracking-tight text-purple-100 text-4xl mb-2 ease-in-out">
          Animated Textures
        </h1>
        <h2 class="font-bold tracking-tight text-purple-100 text-xl mb-12 ease-in-out">
          Easily merge textures for resource pack animations<br/>
          (THIS PAGE IS HEAVILY A WORK IN PROGRESS)
        </h2>

        <script async src="/scripts/gif-frames.js" />
        <p>Select Frame(s) or a GIF</p>
        <input type="file" multiple accept="image/*" class="text-white text-xl file:bg-gray-600 file:hover:bg-gray-500 file:rounded-lg file:cursor-pointer file:px-4 file:py-2 file:mr-4 mt-2 text-transparent file:text-white file:text-lg file:border-none" onChange$={
          (event) => {
            if (!event.target.files) return;
            Array.from(event.target.files).forEach(file => {
              const f = new FileReader();
              f.readAsDataURL(file);
              f.onloadend = async (e) => {
                const b64 = e!.target!.result;
                const type = b64!.toString().split(",")[0].split(";")[0].split(":")[1];
                if (type == "image/gif") {
                  // @ts-ignore
                  const gifframes = await gifFrames({ url: b64, frames: 'all' });
                  gifframes.forEach((frame: any) => {
                    const contentStream = frame.getImage();
                    const imageData = window.btoa(String.fromCharCode.apply(null, contentStream._obj));
                    const b64frame = `data:image/png;base64,${imageData}`;

                    store.frames = [...store.frames, { img: b64frame, delay: Math.ceil(20 * frame.frameInfo.delay / 100) }];
                  });
                  return;
                }
                store.frames = [...store.frames, { img: b64, delay: 20 }];
              }
            })
          }
        } />
        
        <div id="imgs" class="flex flex-wrap max-h-[620px] overflow-auto my-4 gap-2">
          {store.frames.map((frame, i) => {
            return <div class="w-24 rounded-lg border-gray-700 border-2">
              <img width={96} height={96} class="rounded-t-md" src={frame.img} />
              <input type="number" value={frame.delay} onInput$={(event: any) => { store.frames[i].delay = event.target!.value }} class="w-full text-lg bg-gray-700 text-white text-center focus:bg-gray-600 p-2 rounded-b-md"/>
            </div>
          })}
        </div>

        <p>Texture Name</p>
        <input class="text-lg bg-gray-700 text-white focus:bg-gray-600 rounded-lg p-2 mb-6 mt-2" onInput$={(event: any) => {store.textureName = event.target!.value}} />
        <button class="text-white text-md bg-gray-600 hover:bg-gray-500 rounded-lg cursor-pointer px-4 py-2 ml-2" onClick$={
          () => {
            const canvas: any = document.getElementById("c")!;
            const imglist: any = document.getElementById("imgs")!;
            const ctx = canvas.getContext("2d");
            const imgs = imglist.getElementsByTagName("IMG");
            let max = 0;
            for (let i = 0; i != imgs.length; i++) {
              if (imgs[i].naturalWidth > max)max = imgs[i].naturalWidth;
            }
            canvas.width = max;
            canvas.height = max * imgs.length;
            ctx.imageSmoothingEnabled = false;
            for (let i = 0; i != imgs.length; i++) {
              ctx.drawImage(imgs[i], 0, i * max);
              ctx.drawImage(imgs[i], 0, max * i, max, max);
            }
            const b64 = canvas.toDataURL();
            const pngd: any = document.getElementById("pngd")!;
            const mcmeta: any = document.getElementById("mcmeta")!;
            pngd.href = b64;
            pngd.download = store.textureName + ".png";
            mcmeta.download = store.textureName + ".png.mcmeta";

            const start = '{"animation":{"frames": [';
            const frameBase = '{"index": ';
            const frameMid = ', "time": ';
            const frameEnd = '},';
            let res = start;
            for (let i = 0; i != store.frames.length; i++) {
              let tmp = frameBase;
              tmp += i;
              tmp += frameMid;
              tmp += store.frames[i].delay;
              tmp += frameEnd;
              res += tmp;
            }
            res = res.substring(0, res.length - 1);
            res += "]}}";

            mcmeta.href = "data:text/plain;charset=utf-8," + res;

            const links = document.getElementById("links")!
            links.className = "inline";
          }
        }>
          Generate
        </button>
        <br/><br/>
        <div id="links" class="hidden">
          <p class="mb-4">Animated Texture Generated Successfully!</p>
          <a id="pngd" class="text-white text-md bg-gray-600 hover:bg-gray-500 rounded-lg cursor-pointer px-4 py-2">Download PNG</a>
          <a href='data:text/plain;charset=utf-8,{"animation":{}}' id="mcmeta" target="_blank" class="text-white text-md bg-gray-600 hover:bg-gray-500 rounded-lg cursor-pointer px-4 py-2 ml-2">Download MCMETA</a>
        </div>
      </div>
      <canvas id="c" class="w-24 max-h-screen ml-48"></canvas>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Animated Texture Creator',
  meta: [
    {
      name: 'description',
      content: 'Easily merge textures for resource pack animations or convert from GIF'
    },
    {
      name: 'og:description',
      content: 'Easily merge textures for resource pack animations or convert from GIF'
    },
    {
      name: 'og:image',
      content: 'https://simplymc.art/images/icon.png'
    }
  ]
}