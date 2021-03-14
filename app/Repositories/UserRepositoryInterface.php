<?php

namespace App\Repositories;

interface UserRepositoryInterface
{
    public function all();

    public function findById($id);

    public function findByEmail($email);

    public function getByName($name);

    public function createUser($userData);

    public function modifyUser($id, $userData);

    public function removeUser($id);
}
