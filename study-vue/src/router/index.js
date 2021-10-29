import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LifeCycle from '@/views/lifecycle/LifeCycle.vue'
import FilterComp from '@/views/filter/Filter.vue'
import VuexWatchComp from '@/views/vuexWatch/VuexWatch.vue'
import KeepAliveComp from '@/views/keepAlive/KeepAliveComp.vue'
import SelfDialog from '@/views/SelfDialog/SelfDialog.vue'
import MixinComp from '@/views/mixin/MixinComp.vue'
import ElDialogStudy from '@/views/elDialogStudy/ElDialogStudy.vue'
import MicroMacroStudy from '@/views/microMacroStudy/MicroMacroStudy.vue'
import EmitOnStudy from '@/views/emitOn/EmitOn.vue'
import TransitionStudy from '@/views/transitionStudy/TransitionStudy.vue'
import IfFor from '@/views/ifFor/IfFor.vue'
import Closure from '@/views/closure/Closure.vue'
import AtrrsAndListeners from '@/views/attrsAndListeners/AtrrsAndListeners.vue'
import FilePreview from '@/views/filePreview/FilePreview.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lifecycle',
      name: 'LifeCycle',
      component: LifeCycle
    },
    {
      path: '/filter',
      name: 'FilterComp',
      component: FilterComp
    },
    {
      path: '/vuexWatch',
      name: 'VuexWatchComp',
      component: VuexWatchComp
    },
    {
      path: '/keepAlive',
      name: 'KeepAliveComp',
      component: KeepAliveComp
    },
    {
      path: '/dialog',
      name: 'SelfDialog',
      component: SelfDialog
    },
    {
      path: '/mixin',
      name: 'MixinComp',
      component: MixinComp
    },
    {
      path: '/elDialog',
      name: 'ElDialogStudy',
      component: ElDialogStudy
    },
    {
      path: '/microMacro',
      name: 'MicroMacroStudy',
      component: MicroMacroStudy
    },
    {
      path: '/emitOn',
      name: 'EmitOnStudy',
      component: EmitOnStudy
    },
    {
      path: '/transition',
      name: 'TransitionStudy',
      component: TransitionStudy
    },
    {
      path: '/iffor',
      name: 'IfFor',
      component: IfFor
    },
    {
      path: '/closure',
      name: 'Closure',
      component: Closure
    },
    {
      path: '/attrs',
      name: 'AtrrsAndListeners',
      component: AtrrsAndListeners
    },
    {
      path: '/file',
      name: 'FilePreview',
      component: FilePreview
    }
  ]
})
