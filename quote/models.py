from django.db import models
from service_order.models import ServiceOrder

class Quote(models.Model):
    service_order = models.OneToOneField(ServiceOrder, on_delete=models.CASCADE, related_name='quote')
    labor_cost = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    travel_cost = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    other_costs = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total_cost = models.DecimalField(max_digits=10, decimal_places=2, editable=False)

    def __str__(self):
        return f"Quote for OS #{self.service_order.id}"

    def save(self, *args, **kwargs):
        self.total_cost = self.labor_cost + self.travel_cost + self.other_costs
        super().save(*args, **kwargs)
