<div class="page-head">
  <h1>
    <span>
      <slot />
    </span>
  </h1>
  <p class="subtitle">
    <slot name="subtitle" />
  </p>
</div>


<style lang="scss">
  .page-head {
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    animation: fade-in-left .35s cubic-bezier(0.215, 0.610, 0.355, 1);
    animation-delay: .35s;

    h1 {
      font-size: 1.2rem;
      margin: 0 1rem 0.25rem 0;
      padding: 0;
      width: max-content;

      span {
        background: linear-gradient(90deg, var(--lightGray) 60%, var(--yellow));
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        font-family: var(--body-font);
        text-transform: lowercase;
        flex: 0 1 auto;
        white-space: nowrap;
        line-height: 1.2;
      }

      &::before,
      &::after {
        content: '[';
        font-family: var(--body-font);
        font-weight: bold;
        background: initial;
        color: var(--lightGray);
      }

      &::after {
        content: ']';
        color: var(--yellow);
      }

    }

    p.subtitle {
      font-size: 0.8em;
      font-style: italic;
      line-height: 1.2;
      flex: 1 1 auto;
    }
  }

  @keyframes fade-in-left {
    from {
      opacity: 0;
      transform: translateY(-1.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>