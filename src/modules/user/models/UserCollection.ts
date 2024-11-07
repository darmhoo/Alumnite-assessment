import { AnyRecord, Collection, CollectionApiProvider } from '@zidadindimon/vue-mc';
import { UserModel } from './UserModel';
import { User } from '../types/user.types';
import { userCollectionApiProvider } from '../services/api-provider.service';

export class UserCollection extends Collection<UserModel, User> {
  protected model(item?: User | UserModel): {new(): UserModel} {
    return UserModel;
  }

  protected defaultFilterOptions(): AnyRecord {
    return { size: 10 };
  }

  protected api(): CollectionApiProvider<User> {
    return userCollectionApiProvider;
  }
}