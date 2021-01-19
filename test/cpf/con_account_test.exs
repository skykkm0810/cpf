defmodule Cpf.ConAccountTest do
  use Cpf.DataCase

  alias Cpf.ConAccount

  describe "accounts" do
    alias Cpf.ConAccount.Account

    @valid_attrs %{birth: "some birth", centerId: 42, contact: "some contact", email: "some email", level: "some level", name: "some name", pwd: "some pwd", uname: "some uname"}
    @update_attrs %{birth: "some updated birth", centerId: 43, contact: "some updated contact", email: "some updated email", level: "some updated level", name: "some updated name", pwd: "some updated pwd", uname: "some updated uname"}
    @invalid_attrs %{birth: nil, centerId: nil, contact: nil, email: nil, level: nil, name: nil, pwd: nil, uname: nil}

    def account_fixture(attrs \\ %{}) do
      {:ok, account} =
        attrs
        |> Enum.into(@valid_attrs)
        |> ConAccount.create_account()

      account
    end

    test "list_accounts/0 returns all accounts" do
      account = account_fixture()
      assert ConAccount.list_accounts() == [account]
    end

    test "get_account!/1 returns the account with given id" do
      account = account_fixture()
      assert ConAccount.get_account!(account.id) == account
    end

    test "create_account/1 with valid data creates a account" do
      assert {:ok, %Account{} = account} = ConAccount.create_account(@valid_attrs)
      assert account.birth == "some birth"
      assert account.centerId == 42
      assert account.contact == "some contact"
      assert account.email == "some email"
      assert account.level == "some level"
      assert account.name == "some name"
      assert account.pwd == "some pwd"
      assert account.uname == "some uname"
    end

    test "create_account/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ConAccount.create_account(@invalid_attrs)
    end

    test "update_account/2 with valid data updates the account" do
      account = account_fixture()
      assert {:ok, %Account{} = account} = ConAccount.update_account(account, @update_attrs)
      assert account.birth == "some updated birth"
      assert account.centerId == 43
      assert account.contact == "some updated contact"
      assert account.email == "some updated email"
      assert account.level == "some updated level"
      assert account.name == "some updated name"
      assert account.pwd == "some updated pwd"
      assert account.uname == "some updated uname"
    end

    test "update_account/2 with invalid data returns error changeset" do
      account = account_fixture()
      assert {:error, %Ecto.Changeset{}} = ConAccount.update_account(account, @invalid_attrs)
      assert account == ConAccount.get_account!(account.id)
    end

    test "delete_account/1 deletes the account" do
      account = account_fixture()
      assert {:ok, %Account{}} = ConAccount.delete_account(account)
      assert_raise Ecto.NoResultsError, fn -> ConAccount.get_account!(account.id) end
    end

    test "change_account/1 returns a account changeset" do
      account = account_fixture()
      assert %Ecto.Changeset{} = ConAccount.change_account(account)
    end
  end
end
