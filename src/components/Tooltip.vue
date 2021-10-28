<template>
  <div ref="tooltip" class="tooltip-wrapper">
    <div @mouseenter="showTooltip" @mouseleave="hideTooltip">
      <slot class="slot"/>
    </div>
    <div v-show="!disabled" ref="text" class="tooltip-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    text: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    top: {
      type: Boolean,
      required: false
    },
    right: {
      type: Boolean,
      required: false
    },
    left: {
      type: Boolean,
      required: false
    },
    bottom: {
      type: Boolean,
      required: false
    },
  },
  data() {
    return {
      tooltipY: null,
      tooltipX: null
    }
  },
  methods: {
    showTooltip() {
      if (this.disabled)
        return;

      this.centre();

      if (this.top)
        this.tooltipY -= this.$refs.tooltip.clientHeight + 5;

      if (this.right)
        this.tooltipX += (this.$refs.tooltip.clientWidth / 2) + (this.$refs.text.clientWidth / 2) + 10;

      if (this.left)
        this.tooltipX -= (this.$refs.tooltip.clientWidth / 2) + (this.$refs.text.clientWidth / 2) + 10;

      if (this.bottom)
        this.tooltipY += this.$refs.tooltip.clientHeight + 20;

      this.$refs.text.style.top = this.tooltipY + 'px'
      this.$refs.text.style.left = this.tooltipX + 'px'
    },
    hideTooltip() {},
    centre() {
      this.tooltipX = this.$refs.tooltip.getBoundingClientRect().x
          + (this.$refs.tooltip.clientWidth / 2)
          - (this.$refs.text.clientWidth / 2);

      this.tooltipY = this.$refs.tooltip.getBoundingClientRect().y
          - (this.$refs.text.clientHeight / 2);

      this.$refs.text.style.top = this.tooltipY + 'px';
      this.$refs.text.style.left = this.tooltipX + 'px';
    }
  },
  mounted() {
    this.$refs.text.style.left = `0px`;
    this.$refs.text.style.top = `0px`;

    this.tooltipY = 0;
    this.tooltipY = 0;
  }
}
</script>

<style scoped>
.tooltip-text {
  background: #15151a;
  color: #e8e8e8;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.5);
  position: absolute;
  transform: translateY(5px);
  visibility: hidden;

  width: max-content;
  padding: 2px 10px;
  z-index: 1;
}

.tooltip-wrapper:hover > .tooltip-text {
  visibility: visible;
}
</style>