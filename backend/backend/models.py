from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver

# Employee Table
class Employee(models.Model):
    employee_num = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address_line = models.CharField(max_length=100)
    barangay = models.CharField(max_length=50)
    province = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=10)

    def __str__(self):
        return str(self.employee_num)
    
@receiver(pre_save, sender=Employee)
def set_employee_num(sender, instance, **kwargs):
    if instance.employee_num is None:
        # Auto increment starting from 101
        last_employee = Employee.objects.order_by('-employee_num').first()
        if last_employee:
            instance.employee_num = last_employee.employee_num + 1
        else:
            instance.employee_num = 101

# Department Table
class Department(models.Model):
    department_name = models.CharField(max_length=100)
    active_status = models.BooleanField()

    def __str__(self):
        return self.department_name

# JobDesignation Table
class JobDesignation(models.Model):
    job_name = models.CharField(max_length=50)
    department_id = models.ForeignKey(Department, on_delete=models.CASCADE)
    active_status = models.BooleanField()

    def __str__(self):
        return self.job_name

# EmployeeDesignation Table
class EmployeeDesignation(models.Model):
    employee_number = models.ForeignKey(Employee, on_delete=models.CASCADE)
    designation_id = models.ForeignKey(JobDesignation, on_delete=models.CASCADE)
    
    TYPE_CHOICES = [
        ('REGULAR', 'Regular'),
        ('PART-TIME', 'Part-Time'),
        ('PROBATION', 'Probation'),
    ]

    STATUS_CHOICES = [
        ('ACTIVE', 'Active'),
        ('RESIGNED', 'Resigned'),
        ('AWOL', 'AWOL'),
    ]

    employee_type = models.CharField(max_length=10, choices=TYPE_CHOICES, default='REGULAR')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='ACTIVE')

    def __str__(self):
        return str(self.employee_number)