<template>
  <div class="callout" aria-hidden="true">
    <p>
      <slot />
    </p>
  </div>
</template>


<style>
.callout {
  margin: 3rem 1rem;
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.5em;
  position: relative;
  background: var(--paper);
  overflow: hidden;
  padding: 0 1rem 1rem 0;
  display: none;
}

.callout p {
  margin: 0 1em;
}

.callout p:last-of-type {
    margin: 0;
}

.callout p:last-of-type:after {
  content: '';
  height: .25rem;
  width: 100%;
  margin-left: -100%;
  background: var(--yellow);
  bottom: 0;
  position: absolute;
}
 

@media(min-width: 768px) {
  .callout {
    margin: 3rem -2rem 3rem 3rem;
    padding-right: 0;
    display: block;
    float: right;
    width: 50%;
  }
}

@media(min-width: 1024px) {
  .callout {
    width: 20em;
    margin-right: calc(-3rem - 12vw);
  }
}

@media(min-width: 1200px) {
  .callout {
    margin-right: calc(-2rem - 12vw);
  }
}

@media(min-width: 1680px) {
  .callout {
    margin-right: -8rem;
  }
}

@media(min-width: 1960px) {
  .callout {
    margin-right: -12rem;
  }
}

</style>
