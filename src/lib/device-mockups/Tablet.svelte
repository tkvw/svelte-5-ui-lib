<script lang="ts">
  import { type TabletProps as Props, tablet } from ".";

  let { children, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, ...restProps }: Props = $props();

  const { div, leftTop, leftMid, leftBot, right, slot } = tablet();
</script>

<div {...restProps} class={div({ class: divClass })}>
  <div class={leftTop({ class: div2Class })}></div>
  <div class={leftMid({ class: div3Class })}></div>
  <div class={leftBot({ class: div4Class })}></div>
  <div class={right({ class: div5Class })}></div>
  <div class={slot({ class: div6Class })}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:divClass: string;
@props:div2Class: string;
@props:div3Class: string;
@props:div4Class: string;
@props:div5Class: string;
@props:div6Class: string;
-->
