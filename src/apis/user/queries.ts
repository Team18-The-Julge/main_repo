import UserService from '@/apis/user/User.service';
import { PostUserPayload, PutUserPayload } from '@/apis/user/user.type';

const queryKeys = {
  postUser: (payload: PostUserPayload) => ['postUser', payload] as const,
  getUser: (userId: string) => ['getUser', userId] as const,
  putUser: (userId: string, payload: PutUserPayload) => ['putUser', { userId, payload }] as const
};

const queryOptions = {
  postUser: (payload: PostUserPayload) => ({
    mutationKey: queryKeys.postUser(payload),
    mutationFn: (postData: PostUserPayload) => UserService.postUser(postData)
  }),
  getUser: (userId: string) => ({
    queryKey: queryKeys.getUser(userId),
    queryFn: () => UserService.getUser(userId)
  }),
  putUser: (userId: string, payload: PutUserPayload) => ({
    mutationKey: queryKeys.putUser(userId, payload),
    mutationFn: (putPayload: PutUserPayload) => UserService.putUser(userId, putPayload)
  })
};

export default queryOptions;
