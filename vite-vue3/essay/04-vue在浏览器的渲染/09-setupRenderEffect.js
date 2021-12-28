
    if (!instance.isMounted) {
        patch(
           null,
           subTree,
           container,
           anchor,
           instance,
           parentSuspense,
           isSVG
         )
   }else{
     // updateComponent
   }
   // create reactive effect for rendering
   const effect = new ReactiveEffect(
     componentUpdateFn,
     () => queueJob(instance.update),
     instance.scope // track it in component's effect scope
   )

   const update = (instance.update = effect.run.bind(effect) as SchedulerJob)
   update.id = instance.uid

   update()