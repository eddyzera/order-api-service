import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/uniqueEntityId'
import { Optional } from '@/core/types/optional'

export interface UserProps {
  name: string
  email: string
  password_hash: string
  createdAt: Date
}

export class User extends Entity<UserProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get password() {
    return this.props.password_hash
  }

  get createdAt() {
    return this.props.createdAt
  }

  set name(value) {
    this.props.name = value
  }

  set email(value) {
    this.props.email = value
  }

  set password(value) {
    this.props.password_hash = value
  }

  static create(props: Optional<UserProps, 'createdAt'>, id?: UniqueEntityId) {
    const user = new User(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return user
  }
}
