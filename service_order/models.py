from django.db import models

class Client(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=255)
    cep = models.CharField(max_length=9)

    def __str__(self):
        return self.name

class Device(models.Model):
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    serial_number = models.CharField(max_length=100, unique=True)
    patrimony_number = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.brand} {self.model} ({self.serial_number})"

class ServiceOrder(models.Model):
    STATUS_CHOICES = [
        ('Aberto', 'Aberto'),
        ('Em andamento', 'Em andamento'),
        ('Aguardando peça', 'Aguardando peça'),
        ('Finalizado', 'Finalizado'),
        ('Cancelado', 'Cancelado'),
    ]

    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='service_orders')
    device = models.ForeignKey(Device, on_delete=models.CASCADE, related_name='service_orders')
    accessories = models.TextField(blank=True)
    defect = models.TextField()
    observation = models.TextField(blank=True)
    entry_date = models.DateTimeField(auto_now_add=True)

    # Fields to be filled by the technician
    repair_details = models.TextField(blank=True)
    repair_cost = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    resolution = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Aberto')

    def __str__(self):
        return f"OS #{self.id} - {self.client.name} - {self.device.brand} {self.device.model}"
