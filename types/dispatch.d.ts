import { NSObject } from './foundation';

type OS_dispatch_queue = object;
type OS_dispatch_semaphore = object;
type dispatch_queue_global_t = NSObject<OS_dispatch_queue>;
type dispatch_queue_t = NSObject<OS_dispatch_queue>;
type dispatch_semaphore_t = NSObject<OS_dispatch_semaphore>;
