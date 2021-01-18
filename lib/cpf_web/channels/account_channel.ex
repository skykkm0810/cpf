defmodule CpfWeb.AccountChannel do
  use CpfWeb, :channel

  @impl true
  def join("cpf:account", payload, socket) do
    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  @impl true
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (account:lobby).

  def handle_in("account:add:req", %{"body" => payload}, socket) do
    create_account(payload)
    res = list_accounts()
    push(socket, "account:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("account:list:req", %{"body" => payload}, socket) do
    res = list_accounts()
    push(socket, "account:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("account:detail:req", %{"body" => payload}, socket) do
    res = get_account(payload)
    push(socket, "account:detail", res)
    {:reply, {:ok, payload}, socket}
  end

  def handle_in("account:detail:update:req", %{"body" => payload}, socket) do
    IO.puts "===>> #{inspect payload}"
    update_account(payload)
    res = list_accounts()
    push(socket, "account:list", %{body: res})
    {:reply, {:ok, res}, socket}
  end

  def handle_in("account:delete:req", %{"body" => payload}, socket) do
    delete_account(payload)
    res = list_accounts()
    push(socket, "account:list", %{body: res})
    {:reply, {:ok, payload}, socket}
  end




  #   Function




  def list_accounts() do
    center = Cpf.ConCenter.list_centers()
    |> Enum.map(fn c -> %{
      id: c.id,
      name: c.name
    } end)

    Cpf.ConAccount.list_accounts()
    |> Enum.map(fn data ->
      [c] = Enum.filter(center, fn d -> d.id == data.centerId end)

      %{
        id: data.id,
        name: data.name,
        uname: data.uname,
        pwd: data.pwd,
        contact: data.contact,
        birth: data.birth,
        email: data.email,
        level: data.level,
        center: c.name,
        centerId: data.centerId
      } end)
  end

  def get_account(data) do
    {:ok, res} = Cpf.ConAccount.get_account!(data["id"])
    %{
      id: data.id,
      name: data.name,
      manager: data.manager,
      contact: data.contact,
      limited: data.limited,
      address: data.address,
      email: data.email
    }
  end

  def create_account(data) do
    {:ok, res} = Cpf.ConAccount.create_account(data)
  end

  def update_account(data) do
    account = Cpf.ConAccount.get_account!(data["id"])
    {:ok, res} = Cpf.ConAccount.update_account(account, data)
    IO.puts "===>> #{inspect res}"
  end

  def delete_account(data) do
    account = Cpf.ConAccount.get_account!(data["id"])
    {:ok, res} = Cpf.ConAccount.delete_account(account)
  end


  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
