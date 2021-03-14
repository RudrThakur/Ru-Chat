<?php


namespace App\Repositories;
use App\Models\User;

class UserRepository implements UserRepositoryInterface
{
    public function all()
    {
        return User::all();
    }

    public function findById($id)
    {
        return User::find($id);
    }

    public function findByEmail($email)
    {
        return User::where('email', $email)->first();
    }

    public function getByName($name)
    {
        return User::where('name', $name)->get();
    }

    public function createUser($userData)
    {
        return User::create($userData);
    }

    public function modifyUser($id, $userData)
    {
        $user = User::find($id);

        $user->update($userData);

        return $user;
    }

    public function removeUser($id)
    {
        $user = User::find($id);

        $removedUser = $user;

        $user->delete();

        return $removedUser;
    }
}
