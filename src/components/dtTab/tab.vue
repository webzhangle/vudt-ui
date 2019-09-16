<template>
  <div
    class="dt-tab-wrap"
    :class="barPosition === 'top' ? 'dt-tab-bar-top' : ''">
    <div class="dt-tab-container">
      <div
        class="dt-tab"
        :class="[{'dt-tab-no-animate': !animate},{ scrollable }]"
        ref="nav">
        <slot></slot>
        <div
          v-if="animate"
          class="dt-tab-ink-bar"
          :class="barClass"
          :style="barStyle">
          <span
            class="dt-tab-bar-inner"
            :style="innerBarStyle"
            v-if="customBarWidth"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parentMixin } from '../../mixins/multi-items'

export default {
  name: 'tab',
  mixins: [parentMixin],
  mounted () {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true
      }, 0)
    })
  },
  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    scrollThreshold: {
      type: Number,
      default: 4
    },
    barPosition: {
      type: String,
      default: 'bottom',
      validator (val) {
        return ['bottom', 'top'].indexOf(val) !== -1
      }
    }
  },
  computed: {
    barLeft () {
      if (this.hasReady) {
        const nav = this.$refs.nav
        const count = this.scrollable ? (nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width) : this.number
        return `${this.currentIndex * (100 / count) + 40/count}%`
      }
    },
    barRight () {
      if (this.hasReady) {
        const nav = this.$refs.nav
        const count = this.scrollable ? (nav.offsetWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width) : this.number
        return `${(count - this.currentIndex - 1) * (100 / count) + 40/count}%`
      }
    },
    // when prop:custom-bar-width
    innerBarStyle () {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        background: this.barActiveColor || this.activeColor
      }
    },
    // end
    barStyle () {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      }
      if (!this.customBarWidth) {
        commonStyle.background = this.barActiveColor || this.activeColor
      } else {
        commonStyle.background = 'transparent' // when=prop:custom-bar-width
      }
      return commonStyle
    },
    barClass () {
      return {
        'dt-tab-ink-bar-transition-forward': this.direction === 'forward',
        'dt-tab-ink-bar-transition-backward': this.direction === 'backward'
      }
    },
    scrollable () {
      return this.number > this.scrollThreshold
    }
  },
  watch: {
    currentIndex (newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward'
      this.$emit('on-index-change', newIndex, oldIndex)
      this.hasReady && this.scrollToActiveTab()
    }
  },
  data () {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    }
  },
  methods: {
    scrollToActiveTab () {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return
      }
      const currentIndexTab = this.$children[this.currentIndex].$el
      let count = 0
      // scroll animation
      const step = () => {
        const scrollDuration = 30
        const nav = this.$refs.nav
        nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
  }
}
</script>


<style lang="less">
@import url('../../styles/config.less');
@prefixClass: dt-tab;
@easing-in-out: cubic-bezier(0.35, 0, 0.25, 1);
@effect-duration: .3s;

.@{prefixClass} {

  &-ink-bar {
    position: absolute;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: @tab-bar-active-color;
    text-align: center;

    &-transition-forward {
      transition: right @effect-duration @easing-in-out,
      left @effect-duration @easing-in-out @effect-duration * 0.3;
    }
    &-transition-backward {
      transition: right @effect-duration @easing-in-out @effect-duration * 0.3,
      left @effect-duration @easing-in-out;
    }
  }

}

.dt-tab-bar-top .@{prefixClass} {
  &-ink-bar {
    top: 0;
  }
}

.dt-tab {
  display: flex;
  background-color: #fff;
  height: 44px;
  position: relative;
}

.dt-tab button {
  padding: 0;
  border: 0;
  outline: 0;
  background: 0 0;
  appearance: none;
}

.dt-tab .dt-tab-item {
  display: block;
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
  background-size: 100% 1px;
  font-size: 14px;
  text-align: center;
  line-height: 44px;
  color: @tab-text-default-color;
}

.dt-tab .dt-tab-item.dt-tab-selected {
  color: @tab-text-active-color;
  border-bottom: 3px solid @tab-text-active-color;
}

.dt-tab-bar-top {
  .dt-tab .dt-tab-item {
    background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) top left no-repeat;
    background-size: 100% 1px;
  }
  .dt-tab .dt-tab-item.dt-tab-selected {
    border-bottom: none;
    border-top: 3px solid @tab-text-active-color;
  }
}

.dt-tab .dt-tab-item.dt-tab-disabled {
  color: @tab-text-disabled-color;
}

.dt-tab.dt-tab-no-animate .dt-tab-item.dt-tab-selected {
  background: 0 0;
}

/** when=prop:custom-bar-width **/
.dt-tab-bar-inner {
  display: block;
  background-color: @tab-text-active-color;
  margin: auto;
  height: 100%;
  transition: width 0.3s @easing-in-out;
}

.dt-tab-item-badge {
  position: absolute;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  display: inline-block;
  height: 18px;
  min-width: 18px;
  padding: 0 4px;
  border-radius: 30px;
  margin: auto 0 auto 4px;
  line-height: 18px;
  font-size: 11px;
  background-clip: padding-box;
  vertical-align: middle;
}

.dt-tab-wrap {
  position: relative;
  padding-top: 44px;
}

.dt-tab-container {
  height: 44px;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  position: absolute;
}

.scrollable {
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 17px;
  box-sizing: content-box;
}

.scrollable::-webkit-scrollbar {
  display: none;
}

.scrollable .dt-tab-ink-bar {
  bottom: 17px;
  position: absolute;
}

.scrollable .dt-tab-item {
  flex: 0 0 22%;
}

</style>
