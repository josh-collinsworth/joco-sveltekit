<template>
  <main>
    <h1>Uses</h1>

    <p class="fancy details">Things that I use and like, professionally or otherwise.</p>

    <h2>Development</h2>
    <ul>
      <li>
        <strong><Xa to="code.visualstudio.com/">Visual Studio Code</Xa></strong>:
        my favorite editor ever.
        I was a reluctant Sublime Text convert, but the switch was more than worth it.
        <ul>
          <li>
            <strong>Theme: </strong>
            currently on <b><Xa to="draculatheme.com/pro">Dracula Pro</Xa></b>. It's a premium theme that includes skins for iTerm, Slack, etc. and that matches well with my pretty particular color preferences. But if I'm picking a free one, I'm probably going with the built-in <strong><Xa to="marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode">Monokai</Xa></strong> theme.
          </li>
          <li>
            <strong>Font: <Xa to="www.monolisa.dev/">MonoLisa</Xa></strong>.
            I’m a code nerd and a font nerd, so I don't take this choice lightly, but this is my favorite dev font. I love its combination of legibility and subtle personality, and plus, the code ligatures are great. (If you’re not willing to spend the money, though—and I definitely understand if that’s the case—
            <strong><Xa to="github.com/tonsky/FiraCode">Fira Code</Xa></strong> is my runner-up.)
            </li>
          <li>
            <strong>Extensions</strong>:
            I don’t have too many global recommendations here (it depends a lot on what you’re working with), but I’ll mention:

            <ul>
              <li>
                <strong><Xa to="marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html">es6-string-html</Xa></strong>:
                treats HTML inside template literal strings like actual HTML code, for the purposes of highlighting, code completion, Emmett, etc.
              </li>
              <li>
                <strong><Xa to="marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer">Bracket Pair Colorizer</Xa></strong>:
                makes it easier to distinguish where a code block ends by assigning the same color to the opening and closing brackets.
              </li>
              <li>
                <strong><Xa to="marketplace.visualstudio.com/items?itemName=pnp.polacode">Polacode</Xa></strong>:
                a nifty, pretty way to take code screenshots
              </li>
              <li>
                <strong><Xa to="marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare">Live Share</Xa></strong>:
                the best way to collaborate on code remotely that I’ve ever used.
              </li>
              <li>
                <strong><Xa to="marketplace.visualstudio.com/items?itemName=eamodio.gitlens">GitLens</Xa></strong>:
                less indispensable now that VS Code has the <Xa to="scotch.io/bar-talk/vs-code-v144-adds-a-git-timeline-view">Timeline view</Xa>, but still amazingly handy for viewing git status and history in projects.
              </li>
              <li>
                <strong><Xa to="marketplace.visualstudio.com/items?itemName=Compulim.compulim-vscode-closetag">Close HTML/XML Tag</Xa></strong>:
                the only keyboard shortcut I miss from Sublime Text is easily replicated with this extension. Gives you a key command to auto-close whatever HTML tag your cursor is inside of.
              </li>
              <li>
                <strong><Xa to="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag">Auto Rename Tag</Xa></strong>:
              does what it says; when you adjust the opening tag of an HTML element, it makes the same change to the closing tag, and vice versa.
              </li>
              <li>
                <strong><Xa to="https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens">Error Lens</Xa></strong>:
              some understandably find this extension obnoxious, as it outputs errors directly beside your code (rather than keeping them hidden until hover), but I appreciate them always being visible—both to prevent needing to hover or click something, and as a reminder to fix them.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong><Xa to="www.mozilla.org/en-US/firefox/new/">Firefox</Xa></strong>:
        took some getting used to, but it’s a great browser with some awesome tools. It may not be as performant as Chromium browsers in some regards, but I personally view that as feature, not a bug; if I can make a transition or animation smooth in Firefox, I know it's buttery everywhere else, too.
      </li>
      <li>
        <strong><Xa to="localwp.com/">Local</Xa></strong>:
        hands-down the best way to develop WordPress sites. Fast and easy (especially if you host with Flywheel or WP Engine; you can push and pull sites directly).
        </li>
      <li>
        <strong><Xa to="codekitapp.com/">CodeKit</Xa></strong>:
        there’s nothing CodeKit does that I couldn’t accomplish by fiddling with NPM scripts, but why bother? It’s smooth and easy to use, and as a bonus, it works great with Local.
        </li>
      <li>
        <strong><Xa to="www.iterm2.com/">iTerm2</Xa></strong>:
        I’ve tried other terminals, but none seem to run as well, and with the recent update, arguably, none look better, either.
        </li>
      <li>
        <strong><Xa to="www.netlify.com/">Netlify</Xa></strong>:
        I’m also a fan of
        <strong><Xa to="vercel.com/home">Now</Xa></strong>, but Netlify has taken over my JAMstack hosting #1 spot. It’s free to start and unbelievably easy. Netlify makes the painfully difficult effortlessly simple.
      </li>
    </ul>


    <h3>Languages and frameworks</h3>

    <ul>
      <li>
        ES6+ JavaScript is my main language these days, and
        <strong><Xa to="vuejs.org/">Vue</Xa></strong> is my main go-to for anything I’m building (I’m unsurprisingly, therefore, a huge fan of
        <strong><Xa to="nuxtjs.org">Nuxt</Xa></strong> and
        <strong><Xa to="gridsome.org/">Gridsome</Xa></strong> as well).
      </li>
      <li>
        I’m also a big fan of <strong><Xa to="svelte.dev/">Svelte</Xa></strong>, and have made several projects in <strong><Xa to="reactjs.org/">React</Xa></strong> as well. I've got working experience with jQuery and Knockout and am working on implementing TypeScript in my projects.
      </li>
      <li>
        I love <strong>CSS</strong> passionately, but I don’t use any libraries or frameworks; all my CSS is from-scratch, responsive, and custom (usually written in
        <strong><Xa to="sass-lang.com/">SCSS</Xa></strong>). I love authoring smooth, fluid transitions and animations.
      </li>
      <li>
        I'm a strong proponent of well-architected, accessible, and semantic <b>HTML</b>. (I create and use SVG often.)
      </li>
      <li>
        I’m a <Xa to="wordpress.org/">
        <strong>WordPress</strong></Xa> expert and generally prefer to build themes from scratch. I'm capable with PHP and MySQL.
      </li>
      <li>
        Professionally, I've worked with Ruby on Rails and Laravel backends.
      </li>
    </ul>


    <h2>Hardware</h2>

    <ul>
      <li>
        <strong><Xa to="www.anker.com/products/variant/xanker-24g-wireless-vertical-ergonomic-optical-mouse/xa7852011">Anker 2.4G Wireless Vertical Ergonomic Optical Mouse</Xa></strong>:
        I could feel my wrist straining using both a magic mouse and a touchpad. I switched to this mouse years ago. It took some adjustment, but I don’t ever want to use another mouse again, and I don’t even use the extra buttons.
      </li>
      <li>
        <strong><Xa to="https://kinesis-ergo.com/shop/freestyle2-mac/">Kinesis Freestyle2 for Mac</Xa></strong> keyboard:
        I paid for months of sitting-on-the-couch laptop time with a repetitive stress injury on my right wrist. This keyboard is a bit of an adjustment, but it has helped a lot with the wrist pain by keeping my wrists from going to outward angles.
      </li>
      <li>
        <strong><Xa to="https://www.hermanmiller.com/products/seating/office-chairs/sayl-chairs/">Herman Miller Sayl Chair</Xa></strong>:
        I made it about two months as a full-time work-from-home employee before I went and bought one of these chairs. It’s the most comfortable and easily adjustable office chair I’ve ever sat in (and it looks really nice, too).
      </li>
      <li>
        <strong><Xa to="https://www.upliftdesk.com/uplift-v2-standing-desk-frame/">Uplift V2 C-Frame</Xa> standing desk</strong>:
        Not a lot of purchases I’ve been happier with than this one. It works incredibly well and is surprisingly sturdy, even without springing for the commercial version. (I have the 27.5" feet for my larger Ikea desktop, and the Advanced Digital Memory Keypad.)
      </li>
    </ul>


    <h2>Productivity &amp; Utility</h2>

    <ul>
      <li>
        <strong><Xa to="1password.com">1Password</Xa></strong>:
        The first thing I instal on every new device. I’ve tried and liked other password software, but 1Password is just the most reliable cross-platform and -device in my experience.
      </li>
      <li>
        <Xa to="http://xalfredapp.com"><strong>Alfred</strong></Xa>:
        the <em>second</em> thing I install on every new Mac. (I use the <Xa to="www.alfredapp.com/powerpack/">powerpack</Xa> for added features, which is worth every penny.) The main features I love are clipboard history, snippet expansion, global search (never touch Finder again!), and workflows to automate repetitive or tedious tasks. Wouldn’t ever want to work without it.
      </li>
      <li>
        <strong><Xa to="www.getcloudapp.com/">CloudApp</Xa></strong>:
        taking screenshots and videos is a many-times-daily activity for me, and CloudApp makes it as seamless as possible.
      </li>
      <li>
        <strong><Xa to="rightfontapp.com/">RightFont</Xa></strong>:
        a simple, minimalist app for managing your computer’s fonts that looks and works better than Mac’s built-in FontBook.
      </li>
      <li>
        <strong><Xa to="rectangleapp.com/">Rectangle</Xa></strong>:
        never drag or resize another window again. Keyboard shortcuts to put everything right where you need it.
      </li>
      <li>
        <strong><Xa to="www.macbartender.com/">Bartender</Xa></strong>:
        helps wrangle all those app icons in your taskbar if you’re a minimalist like me.
      </li>
      <li>
        <strong><Xa to="matthewpalmer.net/rocket/">Rocket</Xa></strong>:
        lends you Slack-like ability to use emoji anywhere. Way better than the OSX default emoji picker.
      </li>
      <li>
        <strong><Xa to="notion.so">Notion</Xa></strong>:
        my current favorite notes app. Can grow and get as complex as you need it to be, but for simple notes, the markdown and code highlight support is fantastic.
      </li>
    </ul>


    <h2>Design and Illustration</h2>

    <ul>
      <li>
        <strong><Xa to="xaffinity.serif.com">Affinity Photo, Designer and Publisher</Xa></strong>:
        you can have software 90% as good as Photoshop, Illustrator and InDesign <em>forever</em> for the cost of three months of Creative Cloud.
      </li>
      <li>
        <strong><Xa to="www.wacom.com/en-us/products/pen-tablets/intuos-pro-small">Wacom Intuos Pro PTH-451</Xa></strong> (small):
        I don’t often illustrate these days, but when I do, I’m always glad I have this fantastic pad. Wireless is a big plus.
      </li>
    </ul>


    <h2>This site</h2>

    <p class="fancy details">This is about the fifth iteration of my personal brand. The colors haven't changed, but I rotate fonts and layout once every year or two.</p>

    <h3>Colors</h3>

    <ul id="brand-colors">
      {#each colors as color}
        <li class="color">
          <div class="swatch" style="background-color: {color}"></div>
          <span>{color}</span>
        </li>
      {/each}
    </ul>

    <h3>Fonts</h3>
    <FontTester font="Pensum-Display" label="Pensum Display Bold" link="https://www.myfonts.com/fonts/typemates/pensum-display/"/>
    <FontTester font="Averta-Std" label="Averta Standard" link="https://www.myfonts.com/fonts/intelligent-foundry/averta-standard/" italic={true} bold={true} />
    <FontTester font="MonoLisa" label="MonoLisa Regular" link="https://www.monolisa.dev/"/>

    <br />

    <p class="fancy details">
      Other fonts I've used previously:
        <Xa to="www.myfonts.com/fonts/jcfonts/korb/">Korb</Xa>
        (both on its own and paired with <Xa to="fonts.google.com/specimen/Bitter">Bitter</Xa>);
        <Xa to="www.myfonts.com/fonts/bitstream/clarendon/">Clarendon BT Pro</Xa> +
        <Xa to="www.myfonts.com/fonts/latinotype/texta/">Texta</Xa>; and
        <Xa to="www.myfonts.com/fonts/stawix/amsi-pro/">Amsi Pro</Xa> +
        <Xa to="www.myfonts.com/search/sagona">Sagona</Xa>.
    </p>

    <p>(I know you do not care, but this is here mostly just for my own memory.)</p>
  </main>
</template>

<script lang="ts">
  import Xa from '$lib/components/ExternalLink.svelte'
  import FontTester from '$lib/components/FontTester.svelte'

  const colors: string[] = [
    '#ffd100',
    '#34657f',
    '#7ba7bc',
    '#ff6a13',
    '#e4002b',
    '#a7a8aa',
    '#888b8d',
    '#53565a',
    '#341F23',
    '#101820',
  ]
</script>


<style lang="scss">
#brand-colors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8.5rem, 1fr));
  padding: 0;
  
  .color {
    list-style-type: none;
    display: flex;
    align-items: center;
    font-size: .9rem;
    font-family: 'MonoLisa', monospace;
    text-shadow: 0 0 1px #fff;
    
    .swatch {
      width: 3.5em;
      height: 3.5em;
      margin-right: .5rem;
    }
  }
}
</style>