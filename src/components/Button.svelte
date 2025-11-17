<script>
    import { createEventDispatcher } from 'svelte';

    export let href = '';
    export let type = 'button';
    export let loading = '';
    export let disabled = false;
    export let id = '';
    let button;
    const dispatch = createEventDispatcher();

    function triggerClick() {
        dispatch('click');
    }
</script>

<style>
    .button {
        display: inline-flex;
        border: none;
        color: white;
        background: var(--accent);
        margin: var(--space-regular) 0;
        padding: var(--space-small) var(--space-medium);
        font-size: var(--font-small);
        font-weight: bold;
        font-family: inherit;
        text-decoration: none;
        text-transform: uppercase;
        line-height: 2;
        cursor: pointer;
    }
    .button:disabled {
        opacity: .5;
    }
    .button:focus,
    .button:hover {
        outline: 2px solid var(--color-primary);
    }
    .button.loading {
        position: relative;
        color: transparent;
        pointer-events: none;
    }
    .button.loading::after {
        content: "";
        position: absolute;
        box-sizing: border-box;
        top: calc(50% - 12px);
        left: calc(50% - 12px);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border-width: 2px;
        border-style: solid;
        border-color: rgba(255,255,255,1) rgba(255,255,255,.25) rgba(255,255,255,.25);
        animation: loading .7s linear infinite;
    }
    @keyframes loading {
        to { transform: rotate(360deg); }
    }
</style>

{#if href}
    <a class="button" href="{href}" rel="prefetch" bind:this={button}>
        <slot></slot>
    </a>
{:else}
    <button id={id} class="button" on:click={triggerClick} type={type} class:loading={loading} disabled={disabled} tabindex={loading ? "-1" : "0"} bind:this={button}>
        <slot></slot>
    </button>
{/if}
