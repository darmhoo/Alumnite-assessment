import { Model, Collection, MutationList, RuleList, ModelApiProvider } from '@zidadindimon/vue-mc';
import { ModelFetchDto, STATUS, User, USER_ROLES, UserDto } from '../types/user.types';
import { userModelApiProvider } from '../services/api-provider.service';

export class UserModel extends Model<UserDto, UserDto, ModelFetchDto, ModelFetchDto> implements User {
    readonly id!: number;
    name: string = '';
    email: string = '';
    role: USER_ROLES = USER_ROLES.USER;
    status: STATUS = STATUS.ACTIVE;
    profile_photo: string = '';
    createdAt: Date = new Date();
    updatedAt: Date = new Date();

    get uuid(): string {
        return `User #${this.id}`;
    }

    protected mutations(data: UserDto): MutationList<User> {
        return {
            createdAt: () => new Date(data.createdAt),
            updatedAt: () => new Date(data.updatedAt),
        };
    }

    protected api(): ModelApiProvider<UserDto, UserDto, ModelFetchDto, ModelFetchDto> {
        return userModelApiProvider;
      }

    protected mutateBeforeSave(): MutationList<UserDto> {
        return {
          ...this,
          createdAt: this.createdAt.valueOf(),
          updatedAt: this.updatedAt.valueOf(),
        };
      }

      rules(): RuleList<User> {
        return {
          name: [
            (v) => !!v || 'Name can`t be empty',
          ],
          email: [
            (v) => !!v || 'Email can`t be empty',
          ],
          profile_photo: [
            (v) => !!v || 'Profile Photo to can`t be empty',
          ],
        };
      }

      protected toggleSaving(saving?: boolean): this {
        console.log(saving, this);
        return super.toggleSaving(saving);
      }

}



